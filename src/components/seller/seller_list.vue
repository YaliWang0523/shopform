<template >
  <div>
  <!-- Sidenav 縮小會壞掉-->
  <SellerNav/>
  <div class="main-content">
    <!-- Header -->
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <div class="container-fluid">
        <div class="header-body">
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--7">
      <!-- Table -->
      <div class="row">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0">
              <h3 class="mb-0">商品列表</h3>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">編號</th>
                    <th scope="col">商品</th>
                    <th scope="col">狀態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) of this.datas" v-on:click="toDetail(item['OrderId'])" style="cursor:pointer">
                    <th scope="row">
                      <div class="media align-items-center">
                        <div class="media-body">
                          <span class="mb-0 text-sm">{{item['OrderId']}}</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      {{item['OrderName']}}
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-warning"></i>{{item['StatusName']}}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer py-4">
              <nav aria-label="...">
                <ul class="pagination justify-content-end mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      <i class="fas fa-angle-left"></i>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="fas fa-angle-right"></i>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import SellerNav from '@/components/seller/seller_nav'
import {ApiHandle} from '@/Api/ApiHandle.js'
import {CommonFunction} from '@/common/CommonFunction.js'
export default {
  components: { SellerNav },
  name: 'SellerList',
  data () {
    return {
      statusId: '',
      datas: []
    }
  },
  methods: {
    toDetail: function (orderId) {
      console.log(orderId)
      if (this.statusId === '117') {
        this.$router.replace({name: 'confirm_first_pay', params: {info: orderId}})
      } else if (this.statusId === '118') {
        this.$router.replace({name: 'not_arrival', params: {info: orderId}})
      } else if (this.statusId === '120') {
        this.$router.replace({name: 'wait_final_pay', params: {info: orderId}})
      } else if (this.statusId === '121') {
        this.$router.replace({name: 'seller_shipping', params: {info: orderId}})
      } else if (this.statusId === '123') {
        this.$router.replace({name: 'seller_close_order', params: {info: orderId}})
      }
    },
    onHandle: function (data) {
      this.datas = data
      console.log(this.datas)
    },
    onError: function () {
      this.datas = []
    },
    onTokenError: function () {
      this.datas = []
    },
    getData: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      params.append('statusId', this.statusId)
      window.Vue.axios({
        method: 'post',
        url: url + 'Buyer/GetList',
        data: params
      })
      .then((response) => {
      /* eslint-disable no-new */
        new ApiHandle(this.onHandle, this.onError, this.onTokenError, response.data, true, this)
        this.loading = false
      })
      .catch(e => {
        this.errors.push(e)
        this.loading = false
        // Error404
        let commonFunction = new CommonFunction()
        commonFunction.ToError404(this)
      })
    }
  },
  created () {
    this.statusId = this.$route.params.info
    this.getData()
  },
  watch: {
    'statusId' () {
      this.getData()
      console.log(this.statusId)
    }
  }
}
</script>