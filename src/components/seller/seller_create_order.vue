<template >
  <div>
  <!-- Sidenav 縮小會壞掉-->
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand pt-0" href="../index.html">
        <img src="/static/assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
      </a>
      <!-- User -->
      <ul class="nav align-items-center d-md-none">
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ni ni-bell-55"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="/static/assets/img/theme/team-1-800x800.jpg">
              </span>
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
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="../index.html">
                <img src="/static/assets/img/brand/blue.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge">
            <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        <!-- 賣家 Navigation -->
        <!-- Divider -->
        <hr class="my-3">
        <!-- Heading -->
        <h6 class="navbar-heading text-muted">賣家面板</h6>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="../index.html">
              <i class="ni ni-tv-2 text-primary"></i> 建立訂單
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/icons.html">
              <i class="ni ni-planet text-blue"></i> 待匯款
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/maps.html">
              <i class="ni ni-pin-3 text-orange"></i> 未到貨
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/profile.html">
              <i class="ni ni-single-02 text-yellow"></i> 待收尾款
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="../examples/tables.html">
              <i class="ni ni-bullet-list-67 text-red"></i> 待出貨
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/login.html">
              <i class="ni ni-key-25 text-info"></i> 配送中
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/register.html">
              <i class="ni ni-circle-08 text-pink"></i> 完成訂單
            </a>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-3">
        <!-- Heading -->
        <h6 class="navbar-heading text-muted">個人資料</h6>
        <!-- Navigation -->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
              <i class="ni ni-spaceship"></i> 個人檔案
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
              <i class="ni ni-palette"></i> 物流設定
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
              <i class="ni ni-ui-04"></i> 金流設定
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
              <i class="ni ni-ui-04"></i> 平台服務費
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="/static/assets/img/theme/team-4-800x800.jpg">
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
                      <label for="inputPhoto">上傳照片</label>
                      <input type="tel" class="form-control" id="inputPhoto" placeholder="選擇照片">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <a href="#" class="btn btn-primary btn-lg mt-4" role="button" aria-pressed="true">上傳</a>
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
import {ApiHandle} from '@/Api/ApiHandle.js'
import {CommonFunction} from '@/common/CommonFunction.js'
export default {
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