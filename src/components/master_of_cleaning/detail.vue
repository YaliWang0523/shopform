<template >
  <div>
    <!-- Top navbar -->
    <nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-primary">
      <!-- Nav container -->
      <div class="container">
        <a class="navbar-brand" href="#">
        <i class="fas fa-broom"></i>潔屋大師
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <!-- collapse -->
        <div class="collapse navbar-collapse" id="navbar-default">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="../../index.html">
                <img src="/static/assets/img/brand/blue.png">
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                </button>
              </div>
            </div>
          </div>
          <!-- /collapse -->
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
              <i class="fas fa-list-ul"></i>
              <span class="nav-link-inner--text ">案件列表</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
              <i class="fas fa-user"></i>
              <span class="nav-link-inner--text ">登出</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Nav container -->
    </nav>
    <!-- /Top navbar -->
    <!-- Main page -->
    <div class="container">
      <!-- Head -->
      <div class="row mt-3">
        <div class="col">
          <h1 class="float-left text-primary">案件明細-{{datas.typeName}}-{{datas.pid}}</h1>
        </div>
        <div class="col text-right">
          <a class="btn btn-primary ml-3" href="#" role="button">列印</a>
        </div>
      </div>
      <!--/ Head  -->
      <!-- Divider -->
      <hr class="my-3">
      <!-- bs-wizard -->
      <div class="row bs-wizard" style="border-bottom:0;">
        <!-- 預約 -->
        <div class = 'col bs-wizard-step active' v-if="this.datas['status'] == '1000' ">
          <div class="text-center bs-wizard-stepnum">預約</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <div v-else v-bind:class="[this.datas['status'] > '1000' ? 'col bs-wizard-step complete' : 'col bs-wizard-step disabled']">
          <div class="text-center bs-wizard-stepnum">預約</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <!-- /預約 -->
        <!-- 派工 -->
        <div class = 'ccol bs-wizard-step active' v-if="this.datas['status'] == '1001' ">
          <div class="text-center bs-wizard-stepnum">派工</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <div  v-else v-bind:class="[this.datas['status'] > '1001' ? 'col bs-wizard-step complete' : 'col bs-wizard-step disabled']">
          <div class="text-center bs-wizard-stepnum">派工</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <!-- /派工 -->
        <!-- 施做 -->
        <div class = 'ccol bs-wizard-step active' v-if="this.datas['status'] == '1002' ">
          <div class="text-center bs-wizard-stepnum">施做</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <div v-else v-bind:class="[this.datas['status'] >'1002' ? 'col bs-wizard-step complete' : 'col bs-wizard-step disabled']">
          <!-- complete -->
          <div class="text-center bs-wizard-stepnum">施做</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <!-- /施做 -->
        <!-- 結案 -->
        <div class = 'ccol bs-wizard-step active' v-if="this.datas['status'] == '1004' ">
          <div class="text-center bs-wizard-stepnum">結案</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <div div v-else v-bind:class="[this.datas['status'] >'1002' ? 'col bs-wizard-step complete' : 'col bs-wizard-step disabled']">
          <!-- active -->
          <div class="text-center bs-wizard-stepnum">結案</div>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <a href="#" class="bs-wizard-dot"></a>
        </div>
        <!-- /結案 -->
      </div>
      <!-- bs-wizard -->
      <!-- Tab Row -->
      <div class="row my-3">
        <!-- Col -->
        <div class="col">
          <!-- Card -->
          <div class="card shadow">
            <!-- Card Body -->
            <div class="card-body">
              <!-- Tab Buttons -->
              <nav class="nav nav-pills nav-fill">
                <div class="nav " id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">案件明細</a>
                  <a class="nav-item nav-link mx-4" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">派工單位</a>
                  <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">驗收結案</a>
                </div>
              </nav>
              <!-- /Tab Buttons -->
              <!-- Tab Content -->
              <div class="tab-content" id="nav-tabContent">
                <!-- /Tab1 -->
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <!-- Form -->
                  <form>
                    <h2 class="my-4">業主資料</h2>
                    <!-- Form Row -->
                    <div class="form-row">
                      <!-- 預約業主 -->
                      <div class="form-group col-4">
                        <label for="inputName" class="font-weight-bold">預約業主</label>
                        <input type="text" class="form-control" id="inputName" :value = "datas.mname">
                      </div>
                      <!-- /預約業主 -->
                      <!-- Form Group 聯絡電話 -->
                      <div class="form-group col-4">
                        <label for="inputTel" class="font-weight-bold">聯絡電話</label>
                        <input type="text" class="form-control" id="inputTel" placeholder="0978-578-978" :value= "datas.mmobile">
                      </div>
                      <!-- /Form Group 聯絡電話 -->
                      <!-- Form Group Email -->
                      <div class="form-group col-4">
                        <label for="inputEmail" class="font-weight-bold">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="abc@gmail.com" :value = "datas.memail">
                      </div>
                      <!-- /Form Group Email -->
                      <!-- Form Group 施做地址 -->
                      <div class="form-group col-8">
                        <label for="inputAddr" class="font-weight-bold">施做地址</label>
                        <input type="text" class="form-control" id="inputAddr" placeholder="高雄市左營區博愛三路978號" :value = "datas.address">
                      </div>
                      <!-- /Form Group 施做地址 -->
                    </div>
                    <!-- Form Row -->
                    <!-- Divider -->
                    <hr class="my-3">
                    <h2 class="my-4">服務內容</h2>
                    <!-- Form Row -->
                    <div class="form-row">
                      <!-- Form Group 預約類型 -->
                      <div class="form-group col-12">
                        <label class="font-weight-bold mr-2">預約類型</label>
                        <div class="form-check form-check-inline" v-for="(item, index) of this.project_type_name">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions3" :id="item" v-model="select_project_type" :value = "project_type[index]">
                          <label class="form-check-label" for="rdoSelectService1">{{item}}</label>
                        </div>
                      </div>
                      <!-- /Form Group 預約類型 -->
                      <!-- Form Group 服務內容-->
                      <div class="form-group col-4">
                        <label for="selectServiceDetail" class="font-weight-bold">服務內容</label>
                        <input type="text" class="form-control" id="inputName" :value = "datas.pdesc">
                      </div>
                      <!-- /Form Group 服務內容-->
                      <!-- Form Group 聯絡電話-->
                      <div class="form-group col-4" >
                        <label for="inputMoneySum" class="font-weight-bold">總金額</label>
                        <input type="text" class="form-control" id="inputMoneySum" :value = "numberWithCommas(datas.amount)">
                      </div>
                      <!-- /Form Group 聯絡電話-->
                      <!-- Form Group 服務時段 -->
                      <div class="form-group col-12">
                        <label class="font-weight-bold mr-2">服務時段</label>
                        <div class="form-check form-check-inline" v-for="(item, index) of this.time_type_name">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions2" :id="item" v-model="select_time_type" :value = "time_type[index]">
                          <label class="form-check-label" for="rdoSelectTime1">{{item}}</label>
                        </div>
                      </div>
                      <!-- /Form Group 服務時段 -->
                      <!-- Form Group 發票類型 -->
                      <div class="form-group col-12">
                        <label class="font-weight-bold mr-2">發票類型</label>
                        <div class="form-check form-check-inline" v-for="(item, index) of this.invoice_name">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" :id="item" v-model="select_invoice" :value = "invoice[index]">
                          <label class="form-check-label" for="rdolSelectReceipt1">{{item}}</label>
                        </div>
                      </div>
                      <!-- /Form Group 發票類型 -->
                    </div>
                    <!-- /Form Row -->
                  </form>
                  <!-- /Form -->
                  <!-- Action Buttons -->
                  <!-- <div class="row justify-content-center">
                    <div class="col text-center">
                      <a href="#" class="btn btn-outline-primary btn-lg " role="button" aria-pressed="true">取消編輯</a>
                      <a href="#" class="btn btn-primary btn-lg " role="button" aria-pressed="true">確認案件</a>
                    </div>
                  </div> -->
                  <!-- Action Buttons -->
                </div>
                <!-- /Tab1 -->
                <!-- Tab2 -->
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <!-- Form -->
                  <form>
                    <h2 class="my-4">派工單位</h2>
                    <!-- Form Row -->
                    <div class="form-row">
                      <!-- Form Group 服務類型 -->
                      <div class="form-group col-12">
                        <label class="font-weight-bold mr-2">服務類型</label>
                        <div class="form-check form-check-inline" v-for="(item, index) of this.project_type_name">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions4" :id="item" v-model="select_project_type" :value = "project_type[index]">
                          <label class="form-check-label" for="rdoSelectService1">{{item}}</label>
                        </div>
                      </div>
                      <!-- /Form Group 服務類型 -->
                      <!-- Form Group 區域位置-->
                      <!-- <div class="form-group col-4">
                        <label for="selectProArea" class="font-weight-bold">區域位置</label>
                        <select class="form-control" id="selectProArea">
                          <option>台北市</option>
                          <option>台中市</option>
                          <option>高雄市</option>
                        </select>
                      </div> -->
                      <!-- /Form Group 區域位置-->
                      <!-- Form Group 服務單位-->
                      <div class="form-group col-4">
                        <label for="selectProCompany" class="font-weight-bold">服務單位</label>
                        <select v-model="selectVendor" class="form-control" id="selectProCompany">
                          <option value= ""> 請選擇 </option>
                          <option  v-for="(temp, index) of this.s_v[0]" :value= "index">{{temp.vendorName}}</option>
                        </select>
                      </div>
                      <!-- /Form Group 服務單位-->
                      <div class="form-group col-4">
                        <label for="inputProName" class="font-weight-bold">服務員</label>
                        <select class="form-control" id="selectProPeople" v-model="selectP">
                          <option value= ""> 請選擇 </option>
                          <option v-for="(temp, index) of this.p_v" :value= "index">{{temp.vpname}}</option>
                        </select>
                        <!-- <input type="text" class="form-control" id="inputProName" placeholder="陳大姐"> -->
                      </div>
                      <!-- Form Group 聯絡電話 -->
                      <div class="form-group col-4">
                        <label for="inputProTel" class="font-weight-bold">聯絡電話</label>
                        <input type="text" class="form-control" id="inputProTel" placeholder="0978-578-978" :value = "this.selectP_mobile">
                      </div>
                      <!-- /Form Group 聯絡電話 -->
                      <!-- Form Group Email -->
                      <div class="form-group col-4">
                        <label for="inputProEmail" class="font-weight-bold">Email</label>
                        <input type="text" class="form-control" id="inputProEmail" placeholder="abc@gmail.com" :value = "this.selectP_email">
                      </div>
                      <!-- /Form Group Email -->
                    </div>
                    <!-- /Form Row -->
                  </form>
                  <!-- /Form -->
                  <!-- Action Buttons -->
                  <div class="row justify-content-center">
                    <!-- Col -->
                    <div class="col text-center">
                      <!-- <a href="#" class="btn btn-outline-primary btn-lg " role="button" aria-pressed="true">取消編輯</a> -->

                      <a v-on:click="assign()" href="#" class="btn btn-primary btn-lg " role="button" aria-pressed="true" v-if = "this.datas['status'] == '1000'">確認派工</a>
                    </div>
                    <!-- /Col -->
                  </div>
                  <!-- /Action Buttons -->
                </div>
                <!-- Tab3 -->
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <!-- Form -->
                  <form>
                    <h2 class="my-4">驗收結案</h2>
                    <!-- Form Row -->
                    <div class="form-row">
                      <!-- Form Group 滿意度 -->
                      <div class="form-group col-12" >
                        <label class="font-weight-bold mr-2" >滿意度</label>
                        <div class="form-check form-check-inline" v-for="(item, index) of this.review_name">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions5" :id="item" v-model="select_review" :value = "review[index]">
                          <label class="form-check-label" for="rdoSatisfaction5">{{item}}</label>
                        </div>
                      </div>
                      <!-- /Form Group 滿意度 -->
                      <div class="form-group col-8">
                        <label for="textareaFeedback" class="font-weight-bold">意見回饋</label>
                        <textarea class="form-control" id="textareaFeedback" rows="3" v-model="this.review_desc"></textarea>
                      </div>
                    </div>
                    <!-- /Form Row -->
                  </form>
                  <!-- Action Buttons -->
                  <div class="row justify-content-center">
                    <!-- Col -->
                    <div class="col text-center">
                      <!-- <a href="#" class="btn btn-outline-primary btn-lg " role="button" aria-pressed="true">取消編輯</a> -->
                      <a href="#" v-on:click="goreview()" class="btn btn-primary btn-lg " role="button" aria-pressed="true" v-if = "this.datas['status'] == '1002'">確認結案</a>
                    </div>
                    <!-- /Col -->
                  </div>
                  <!-- Action Buttons -->
                </div>
                <!-- /Tab3 -->
              </div>
              <!-- /Tab Content -->
            </div>
            <!-- /Card Body -->
          </div>
          <!-- /Card -->
        </div>
        <!-- Col -->
      </div>
      <!-- /Tab Row -->
    </div>
  </div>
</template>
<style>
      .bs-wizard {margin-top: 40px;}
      /*Form Wizard*/
      .bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;}
      .bs-wizard > .bs-wizard-step {padding: 0; position: relative;}
      .bs-wizard > .bs-wizard-step + .bs-wizard-step {}
      .bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #595959; font-size: 16px; margin-bottom: 5px;}
      .bs-wizard > .bs-wizard-step .bs-wizard-info {color: #999; font-size: 14px;}
      .bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 20px; height: 20px; display: block; background: #97a4ef; top: 45px; left: 50%; margin-top: -10px; margin-left: -10px; border-radius: 50%;}
      .bs-wizard > .bs-wizard-step > .bs-wizard-dot:after {content: ' '; width: 10px; height: 10px; background: #5e72e4; border-radius: 50px; position: absolute; top: 5px; left: 5px; }
      .bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 5px; box-shadow: none; margin: 20px 0;}
      .bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none; background: #97a4ef;}
      .bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;}
      .bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:50%;}
      .bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:0%;}
      .bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}
      .bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {background-color: #999999;}
      .bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot:after {opacity: 0;}
      .bs-wizard > .bs-wizard-step:first-child  > .progress {left: 50%; width: 50%;}
      .bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}
      .bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }
    </style>
<script>
import {ApiHandle} from '@/Api/ApiHandle.js'
import {CommonFunction} from '@/common/CommonFunction.js'
export default {
  name: 'Detail',
  data () {
    return {
      loading: false,
      datas: [],
      errors: [],
      invoice_name: ['二聯發票', '三聯發票', '載具發票'],
      invoice: ['1000', '1001', '1002'],
      select_invoice: '',
      time_type_name: ['平日上午', '平日下午', '週六上午', '週六下午', '以上時段皆可'],
      time_type: ['1000', '1001', '1002', '1003', '1004'],
      select_time_type: '1000',
      project_type_name: ['居家清潔', '專業除蟎', '水管淨化', '冷氣機清洗', '洗衣機清洗'],
      project_type: ['1000', '1001', '1002', '1004', '1005'],
      select_project_type: '',
      review_name: ['非常滿意', '滿意', '普通', '不滿意', '非常不滿意'],
      review: ['1000', '1001', '1002', '1003', '1004'],
      select_review: '',
      all_vendordatas: [],
      vendor_data: [],
      s_v: [],
      selectVendor: '',
      p_v: [],
      selectP: '',
      selectP_email: '',
      selectP_mobile: '',
      selectP_id: '',
      pid: '',
      review_desc: ''
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
    onHandle: function (data) {
      this.datas = data[0]
      this.select_project_type = this.datas['type']
      this.select_time_type = this.datas['time_type']
      this.select_invoice = this.datas['invoice_type']
      for (var i = 0; i < this.vendor_data.length; i++) {
        if (this.vendor_data[i]['item'] === this.datas['type']) {
          this.s_v = []
          this.s_v.push(this.vendor_data[i])
          break
        }
      }
      // TODO review
      // this.select_review = this.datas['']
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
      params.append('pid', this.pid)
      window.Vue.axios({
        method: 'post',
        url: url + 'Project/Detail',
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
    onGetVendorHandle: function (data) {
      this.all_vendordatas = data
      this.vendor_data = []
      var item = []
      var v = []
      for (var i = 0; i < this.all_vendordatas.length; i++) {
        var temp = data[i]
        var p = []
        if (i < this.all_vendordatas.length - 1 && temp['item'] === data[i + 1]['item']) {
          if (temp['VendorId'] === data[i + 1]['VendorId']) {
            p = []
            p['vpname'] = temp['vpname']
            p['mobile'] = temp['mobile']
            p['email'] = temp['email']
            v.push(p)
          } else {
            v['vendorId'] = temp['VendorId']
            v['vendorName'] = temp['VendorName']
            p['vpname'] = temp['vpname']
            p['mobile'] = temp['mobile']
            p['email'] = temp['email']
            v.push(p)
            item.push(v)
            v = []
          }
        } else {
          item['item'] = temp['item']
          v['vendorId'] = temp['VendorId']
          v['vendorName'] = temp['VendorName']
          p['vpname'] = temp['vpname']
          p['mobile'] = temp['mobile']
          p['email'] = temp['email']
          v.push(p)
          item.push(v)
          v = []
          this.vendor_data.push(item)
          item = []
        }
      }
      this.getData()
    },
    onGetVendorError: function () {
      this.all_vendordatas = []
    },
    onGetVendorTokenError: function () {
      this.all_vendordatas = []
    },
    getVendorData: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      window.Vue.axios({
        method: 'post',
        url: url + 'Admin/GetVendor',
        data: params
      })
      .then((response) => {
      /* eslint-disable no-new */
        new ApiHandle(this.onGetVendorHandle, this.onGetVendorError, this.onGetVendorTokenError, response.data, true, this)
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
    onAssignHandle: function (data) {
      this.getData()
    },
    onAssignError: function () {
      this.all_vendordatas = []
    },
    onAssignTokenError: function () {
      this.all_vendordatas = []
    },
    assign: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      params.append('pid', this.pid)
      params.append('vpid', this.selectP_id)
      window.Vue.axios({
        method: 'post',
        url: url + 'Admin/Assign',
        data: params
      })
      .then((response) => {
      /* eslint-disable no-new */
        new ApiHandle(this.onAssignHandle, this.onAssignError, this.onAssignTokenError, response.data, true, this)
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
    onReviewHandle: function (data) {
      this.getData()
    },
    onReviewError: function () {
      this.all_vendordatas = []
    },
    onReviewTokenError: function () {
      this.all_vendordatas = []
    },
    goreview: function () {
      let commonFunction = new CommonFunction()
      let url = commonFunction.GetApiUrl()
      this.loading = true
      var params = new URLSearchParams()
      params.append('pid', this.pid)
      params.append('review', '1000')
      params.append('desc', this.review_desc)
      window.Vue.axios({
        method: 'post',
        url: url + 'Admin/Review',
        data: params
      })
      .then((response) => {
      /* eslint-disable no-new */
        new ApiHandle(this.onReviewHandle, this.onReviewError, this.onReviewTokenError, response.data, true, this)
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
    this.pid = this.$route.params.info
    this.getVendorData()
  },
  watch: {
    'selectVendor' () {
      this.p_v = this.s_v[0][this.selectVendor]
    },
    'selectP' () {
      this.selectP_email = this.p_v[this.selectP]['email']
      this.selectP_mobile = this.p_v[this.selectP]['mobile']
      this.selectP_id = this.p_v[this.selectP]['vpid']
    }
  }
}
</script>