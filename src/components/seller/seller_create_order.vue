<template >
  <div>
  <!-- Sidenav 縮小會壞掉-->
  <SellerNav/>
  <!-- Main content -->
  <div class="main-content">
    <!-- Top navbar -->
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        <!-- Brand -->
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">建立訂單</a>
        <!-- User -->
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      <!-- Table -->
      <div class="row">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0">
              <h3 class="mb-0">商品內容</h3>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="inputProductName">商品名稱</label>
                      <input type="text" class="form-control" id="inputProductName" placeholder="商品名稱" v-model="OrderName">
                    </div>
                  </div> 
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="inputProductSize">尺寸</label>
                      <input type="text" class="form-control" id="inputProductSize" placeholder="w30 x h30 x d30" v-model="OrderSize">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="inputSum">數量</label>
                      <select class="form-control" id="inputSum" v-model="OrderCount">
                        <option value="">請選擇</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="textareaProductDetail">商品描述</label>
                      <textarea v-model="OrderDesc" class="form-control" id="textareaProductDetail" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="col-md-3">
                   <div class="form-group">
                      <label for="inputSum">圖片</label>
                      <select class="form-control" id="inputSum" >
                        <option value="">請選擇</option>
                        <option value="1">電腦包</option>
                        <option value="2">輕便購物包</option>
                        <option value="3">擦擦筆 紅/黑</option>
                        <option value="4">飲料袋 /杯套</option>
                      </select>
                    </div>
                  </div> 
                </div>
              </form>
            </div>
            <!-- Card Row2 -->
        <div class="row my-3">
          <div class="col">
            <div class="card shadow">
              <div class="card-header border-0">
                <h3 class="mb-0">價格設定</h3>
              </div>
              <!-- Card Body -->
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputPriceSum">總價</label>
                        <input type="text" class="form-control" id="inputPriceSum" placeholder="總價" v-model="OrderTotal">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputfristPay">訂金</label>
                        <select class="form-control" id="inputfristPay" v-model="OrderPercent">
                          <option value="">請選擇</option>
                          <option value="101">10%</option>
                          <option value="102">20%</option>
                          <option value="103">30%</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputfinalPay">尾款</label>
                        <input type="text" class="form-control" id="inputfinalPay" placeholder="尾款" v-model="OrderBalance">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputBuyer">購買人</label>
                        <input type="text" class="form-control" id="inputBuyer" placeholder="購買人" v-model="BuyerName">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputShipment">出貨時間</label>
                        <select class="form-control" id="inputShipment" v-model="ProductTime">
                          <option value="">請選擇</option>
                          <option value="104">1個月</option>
                          <option value="105">2個月</option>
                          <option value="106">3個月</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /Card Body -->
            </div>
          </div>
        </div>
        <!-- Card Row2 -->
            <!-- /Card Body -->
            <div class="card-footer py-4">
              <button class="btn btn-primary btn-lg" role="button" aria-pressed="true" v-on:click="saveData()" :disabled="!(OrderName && OrderSize && OrderCount && OrderTotal && OrderPercent && OrderDeposit && OrderBalance && BuyerName && ProductTime)" >送出訂單</button>
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
  name: 'SellerCreateOrder',
  data () {
    return {
      datas: [],
      OrderName: '',
      OrderSize: '',
      OrderCount: '',
      OrderDesc: '',
      OrderTotal: '',
      OrderPercent: '',
      OrderDeposit: '',
      OrderBalance: '',
      BuyerName: '',
      ProductTime: ''
    }
  },
  methods: {
    onHandle: function (data) {
      this.datas = data
      this.$router.replace({name: 'seller_list', params: {info: '115'}})
    },
    onError: function () {
      this.datas = []
    },
    onTokenError: function () {
      this.datas = []
    },
    createData: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      params.append('OrderName', this.OrderName)
      params.append('OrderSize', this.OrderSize)
      params.append('OrderCount', this.OrderCount)
      params.append('OrderDesc', this.OrderDesc)
      params.append('OrderTotal', this.OrderTotal)
      params.append('OrderPercent', this.OrderPercent)
      params.append('OrderDeposit', this.OrderDeposit)
      params.append('OrderBalance', this.OrderBalance)
      params.append('BuyerName', this.BuyerName)
      params.append('ProductTime', this.ProductTime)
      window.Vue.axios({
        method: 'post',
        url: url + 'Seller/Create',
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
    },
    saveData: function () {
      console.log(this.OrderName)
      console.log(this.OrderSize)
      console.log(this.OrderCount)
      console.log(this.OrderDesc)
      console.log(this.OrderTotal)
      console.log(this.OrderPercent)
      console.log(this.OrderDeposit)
      console.log(this.OrderBalance)
      console.log(this.BuyerName)
      console.log(this.ProductTime)
      this.createData()
    },
    changeDeposit: function () {
      if (this.OrderTotal !== '' && this.OrderPercent !== '') {
        if (this.OrderPercent === '101') {
          this.OrderDeposit = this.OrderTotal * 0.1
          this.OrderBalance = this.OrderTotal * 0.9
        } else if (this.OrderPercent === '102') {
          this.OrderDeposit = this.OrderTotal * 0.2
          this.OrderBalance = this.OrderTotal * 0.8
        } else {
          this.OrderDeposit = this.OrderTotal * 0.3
          this.OrderBalance = this.OrderTotal * 0.7
        }
        console.log(this.OrderDeposit)
      }
    }
  },
  created () {
  },
  watch: {
    'OrderTotal' () {
      this.changeDeposit()
    },
    'OrderPercent' () {
      this.changeDeposit()
    }
  }
}
</script>