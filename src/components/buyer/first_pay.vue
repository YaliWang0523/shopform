<template >
  <div>
    <BuyerNev/>
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
                    <img alt="Image placeholder" src="static/assets/img/theme/team-3-800x800.jpg">
                  </span>
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">周杰倫</span>
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
      <div class="header bg-gradient-teal pb-8 pt-5 pt-md-8">
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
                <h3 class="mb-0">付款、寄送方式</h3>
              </div>
              <!-- Card Body -->
              <div class="card-body">
               <form>
                  <div class="row">
                    <div class="col-md-12">
                       <div class="form-group">
                        <strong class="mr-3">付款方式</strong>
                        <div class="custom-control custom-radio custom-control-inline" v-for="(item, index) of this.pay1">
                          <input type="radio"  name="customRadioInline1" class="custom-control-input" :value="item" :id="pay1code[index]" v-model="select_pay1">
                          <label class="custom-control-label" :for="pay1code[index]">{{item}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <strong class="mr-3">寄送方式</strong>
                        <div class="custom-control custom-radio custom-control-inline" v-for="(item, index) of this.pay2">
                          <input type="radio"  name="radioShipping1" class="custom-control-input" :value="pay2code[index]" :id="pay2code[index]" v-model="select_pay2">
                          <label class="custom-control-label" :for="pay2code[index]">{{item}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /Card Body -->
            </div>
          </div>
        </div>
        <!-- /Card Row1 -->
        <!-- Card Row2 -->
        <div class="row my-3">
          <div class="col">
            <div class="card shadow">
              <div class="card-header border-0">
                <h3 class="mb-0">訂購人資訊</h3>
              </div>
              <!-- Card Body -->
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputBuyName">收件人</label>
                        <input type="text" class="form-control" id="inputBuyName" placeholder="收件人" :value="datas['Name']">
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label for="inputBuyerAddr">地址</label>
                        <input type="text" class="form-control" id="inputBuyerAddr" placeholder="地址" :value="datas['Address']">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputBuyerPhone">手機</label>
                        <input type="tel" class="form-control" id="inputBuyerPhone" placeholder="手機" :value="datas['Phone']">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputBuyerEmail">Email</label>
                        <input type="email" class="form-control" id="inputBuyerEmail" placeholder="Email" :value="datas['Email']">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="selectShippingTime">配送時間</label>
                        <select class="form-control" id="selectShippingTime" v-model="select_time">
                          <option vaule="上午">上午</option>
                          <option vaule="下午">下午</option>
                          <option vaule="晚上">晚上</option>
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
        <!-- Card Row3 -->
        <div class="row mb-3">
          <div class="col">
            <div class="card shadow">
              <div class="card-header border-0">
                <h3 class="mb-0">付款資訊</h3>
              </div>
              <!-- Card Body -->
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputPayBank">匯款銀行</label>
                        <input type="text" class="form-control" id="inputPayBank" placeholder="匯款銀行" v-model="bank">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="inputPayAccout">帳號後五碼</label>
                        <input type="text" class="form-control" id="inputPayAccout" placeholder="帳號後五碼" v-model="payaccout">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /Card Body -->
            </div>
          </div>
        </div>
        <!-- Card Row3 -->
        <button v-on:click="saveData()" class="btn btn-primary btn-lg my-3" role="button" aria-pressed="true" :disabled="!(orderId && select_pay1 && select_pay2 && select_time && payaccout && bank)">確認匯款</button>
        
      </div>
    </div>
  </div>
</template>
<script>
import BuyerNev from '@/components/buyer/buyer_nav'
import {ApiHandle} from '@/Api/ApiHandle.js'
import {CommonFunction} from '@/common/CommonFunction.js'
export default {
  name: 'FirstPay',
  components: { BuyerNev },
  data () {
    return {
      orderId: '',
      pay1: ['銀行轉帳', 'LINE PAY', '街口支付', '超商取貨付款'],
      pay1code: ['107', '108', '109', '110'],
      select_pay1: '',
      pay2: ['黑貓宅急便', '中華郵政', '超商取貨'],
      pay2code: ['111', '112', '113'],
      select_pay2: '',
      select_time: '',
      payaccout: '',
      bank: '',
      datas: []
    }
  },
  methods: {
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
    },
    onSetHandle: function (data) {
      this.datas = data
      this.$router.replace({name: 'buyer_list', params: {info: '117'}})
      console.log(this.datas)
    },
    onSetError: function () {
      this.datas = []
    },
    onTokenSetError: function () {
      this.datas = []
    },
    setData: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      params.append('orderId', this.orderId)
      params.append('payType', this.select_pay1)
      params.append('cargoType', this.select_pay2)
      params.append('cargoTime', this.select_time)
      params.append('bank', this.bank)
      params.append('accountNum', this.payaccout)
      window.Vue.axios({
        method: 'post',
        url: url + 'Buyer/PayDeposit',
        data: params
      })
      .then((response) => {
      /* eslint-disable no-new */
        new ApiHandle(this.onSetHandle, this.onSetError, this.onTokenSetError, response.data, true, this)
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
      this.setData()
    }
  },
  created () {
    this.orderId = this.$route.params.info
    this.getData()
  }
}
</script>