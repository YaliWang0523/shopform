<template >
  <div>
    <SellerNav/>
    <!-- Main content -->
  <div class="main-content">
    <!-- Top navbar -->
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        <!-- Brand -->
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">待匯款</a>
        <!-- User -->
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="static/assets/img/theme/team-4-800x800.jpg">
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">薇薇安鄭</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="../examples/profile.html" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="../examples/profile.html" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="../examples/profile.html" class="dropdown-item">
                <i class="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="../examples/profile.html" class="dropdown-item">
                <i class="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Header -->
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <div class="container-fluid">
        <div class="header-body">

        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--7">
      <!-- Card Row1 -->
      <div class="row">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0">
              <h3 class="mb-0">商品內容<strong class=" float-right">訂單編號：{{datas['OrderId']}}</strong></h3>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <img class="rounded mx-auto d-block" width="100%" alt="Image placeholder" src="static/assets/img/sample.jpg">
                </div>
                <div class="col-md-9">
                  <h2 class="card-title ">{{datas['OrderName']}}</h2>
                  <p>{{datas['OrderDesc']}}</p>
                </div>
              </div>
            </div>
            <!-- /Card Body -->
            <div class="card-footer py-4 text-right">
              <p>
                <span>數量：{{datas['Count']}}</span>
                <span class="mx-5">出貨時間：{{datas['ProductTime']}}</span>
                <span>購買人：{{datas['Name']}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- /Card Row1 -->
      <!-- Card Row2 -->
      <div class="row mt-3">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0">
              <h3 class="mb-0">買家物流資訊</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                <tr>
                  <td class="w-25"><strong class="mr-2">收件人</strong>{{datas.Name}}</td>
                  <td class="w-25"><strong class="mr-2">手機</strong>{{datas.Phone}}</td>
                  <td><strong class="mr-2">Email</strong>{{datas.Email}}</td>
                </tr>
                <tr>
                  <td colspan="2"><strong class="mr-2">地址</strong>{{datas['Address']}}</td>
                  <td><strong class="mr-2">配送時間</strong>{{datas['CargoTime']}}</td>
                  <td></td>
                </tr>
              </table>
              </div>
            </div>
          </div>
        </div>
        <!-- /col -->
      </div>
      <!-- /Card Row2 -->
      <!-- Card Row3 -->
      <div class="row mt-3">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0">
              <h3 class="mb-0">買家金流資訊</h3>
            </div>
            <div class="card-body">
              <table class="table align-items-center table-flush">
                <tr>
                  <td class="w-25"><strong class="mr-2">付款方式</strong>{{datas['PayType']}}</td>
                  <td class="w-25"><strong class="mr-2">銀行</strong>{{datas['Bank']}}</td>
                  <td class="w-50"><strong class="mr-2">後五碼</strong>{{datas['AccountNum']}}</td>
                </tr>
                <tr>
                  <td class="w-25"><strong class="mr-2">付款內容</strong>頭款</td>
                  <td class="w-25"><strong class="mr-2">金額</strong>{{numberWithCommas(datas['Deposit'])}}</td>
                  <td class="w-50"></td>
                </tr>
              </table>
            </div>
          </div>
          <!-- /card -->
        </div>
        <!-- /col -->
    </div>
    <!-- /Card Row3 -->
    <button class="btn btn-primary btn-lg my-3" role="button" aria-pressed="true" v-on:click="confirmFirstPay()">確認入帳</button>
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
  name: 'ConfirmFirstPay',
  data () {
    return {
      datas: [],
      orderId: ''
    }
  },
  methods: {
    numberWithCommas: function (x) {
      if (x !== '') {
        return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        return '0'
      }
    },
    confirmFirstPay: function () {
      this.saveData()
    },
    onSaveHandle: function (data) {
      this.datas = data[0]
      this.$router.replace({name: 'seller_list', params: {info: '118'}})
    },
    onSaveError: function () {
      this.datas = []
    },
    onTokenSaveError: function () {
      this.datas = []
    },
    saveData: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      params.append('orderId', this.orderId)
      params.append('statusId', '118')
      window.Vue.axios({
        method: 'post',
        url: url + 'All/SetStatus',
        data: params
      })
      .then((response) => {
      /* eslint-disable no-new */
        new ApiHandle(this.onSaveHandle, this.onSaveError, this.onTokenSaveError, response.data, true, this)
        this.loading = false
      })
      .catch(e => {
        this.errors.push(e)
        this.loading = false
        // Error404
        let commonFunction = new CommonFunction()
        commonFunction.ToError404(this)
      })
    },
    onHandle: function (data) {
      this.datas = data[0]
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
      params.append('orderId', this.orderId)
      window.Vue.axios({
        method: 'post',
        url: url + 'All/GetDetail',
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
    this.orderId = this.$route.params.info
    this.getData()
  }
}
</script>