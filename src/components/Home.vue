<template >
<!-- Sidenav -->
<!-- Main content -->
  <div class="main-content">
  <!-- Top navbar -->
    <nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
      	<a class="navbar-brand" href="#">
      		<i class="fas fa-broom"></i>潔屋大師
      	</a>
      	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
      		<span class="navbar-toggler-icon"></span>
      	</button>
      	<div class="collapse navbar-collapse" id="navbar-default">
      		<div class="navbar-collapse-header">
              <div class="row">
                <div class="col-6 collapse-brand">
                  <a href="../../index.html"> <!--todo 加連結-->
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
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#">
                  <i class="fas fa-user"></i>
                  <span class="nav-link-inner--text ">登出</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- /Top navbar -->
      <!-- Main page -->
      <div class="container">
        <!-- Head -->
        <div class="row mt-3">
          <div class="col">
            <h1 class="float-left text-primary">案件列表</h1>
          </div>
          <!-- <div class="col text-right">
            <a class="btn btn-primary ml-3" href="#" role="button">新增預約案件</a>
          </div> -->
        </div>
        <!-- Divider -->
        <hr class="my-3">
        <!-- Sub Head -->
        <div class="row mt-3">
          <!-- Filter -->
          <div class="col">
            <!-- 案件類型 -->
            <div class="btn-group mr-3">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                案件類型
              </a>
              <form class="dropdown-menu p-4">
                <div class="form-check mb-2" v-for="(item, index) of this.project_type_name">
                  <input type="checkbox" name="inlineRadioOptions" class="form-check-input" :id="item" v-model="select_project_type" :value = "project_type[index]">
                  <label class="form-check-label" for="dropdownCheck1">
                    {{item}}
                  </label>
                </div>
              </form>
            </div>
            <!-- /案件類型 -->
            <!-- 案件狀態 -->
            <div class="btn-group mr-3">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                案件狀態
              </a>
              <form class="dropdown-menu p-4">
                <div class="form-check mb-2" v-for="(item, index) of this.project_status_name" >
                  <input type="checkbox" :id="item" class="form-check-input" v-model="select_project_status" :value = "project_status[index]">
                  <label class="form-check-label" for="dropdownCheck1">
                    {{item}}
                  </label>
                </div>
              </form>
            </div>
            <!-- /案件狀態 -->
            <!-- 預約月份-->
            <!-- <div class="btn-group mr-3">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                預約日期
              </a>
              <form class="dropdown-menu p-4">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">年份</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>2018</option>
                    <option>2019</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">月份</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </form>
            </div> -->
            <!-- /預約月份 -->
            <!-- 派工月份-->
           <!--  <div class="btn-group">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                派工日期
              </a>
              <form class="dropdown-menu p-4">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">年份</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>2018</option>
                    <option>2019</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">月份</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </form>
            </div> -->
            <!-- /派工月份 -->
          </div>
          <!-- /Filter -->
          <!-- Pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination align-items-center">
              <strong class="mr-1">案件 1-{{datas.length}} 共 {{datas.length}} 件</strong>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <i class="fa fa-angle-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <i class="fa fa-angle-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- Pagination -->
        </div>
        <!-- /Sub Head -->
        <!-- Divider -->
        <hr class="my-3">
        <!-- Page content -->
        <!-- Card Table Row -->
        <div class="row">
          <div class="col">
            <div class="card shadow">
              <!-- Table-Responsive -->
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">業主</th>
                      <th scope="col">案件類型</th>
                      <th scope="col">狀態</th>
                      <th scope="col">預約日期</th>
                      <th scope="col">派工日期</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item of this.datas">
                      <th scope="row">
                        <div class="align-items-center">
                        	<router-link :to="{path: '/detail/' + item.pid}">
  								<a>
  									<span class="mb-0 text-sm text-primary">{{item.memberName}}</span>
  								</a>
							</router-link>
                          
                        </div>
                      </th>
                      <td>
                        {{item.typeName}}
                      </td>
                      <td>
                        <span class="badge badge-dot mr-4" >
                          <i class="bg-warning" v-if="item.status === '1000'"></i> 
                          <i class="bg-success" v-else-if="item.status === '1001'"></i>
                          <i class="bg-primary" v-else></i>
                          {{item.statusName}}
                        </span>
                      </td>
                      <td>
                        {{formatDate(item.createTime)}}
                      </td>
                      <td>
                        <!--todo 派工日期-->
                      </td>
                      <td class="text-right">
                        <div class="dropdown">
                          <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <a class="dropdown-item" href="#">編輯</a>
                            <a class="dropdown-item" href="#">派工</a>
                            <a class="dropdown-item" href="#">結案</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /Table-Responsive -->
            </div>
            <!-- /Col -->
          </div>
          <!-- /Card Table Row -->
        </div>
        <!-- Main content -->
      </div>
  </div>
</template>
<script>
import {ApiHandle} from '@/Api/ApiHandle.js'
import {CommonFunction} from '@/common/CommonFunction.js'
export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      datas: [],
      errors: [],
      project_status_name: ['媒合中', '已派工', '施作', '結案'],
      project_status: ['1000', '1001', '1002', '1003'],
      select_project_status: ['1000'],
      project_type_name: ['居家清潔', '專業除蟎', '水管淨化', '冷氣機清洗', '洗衣機清洗'],
      project_type: ['1000', '1001', '1002', '1004', '1005'],
      select_project_type: ['1000', '1001', '1002', '1004', '1005']
    }
  },
  methods: {
    check_status () {

    },
    formatDate (date) {
      let commonFunction = new CommonFunction()
      let result = commonFunction.DateForamt(date)
      return result
    },
    onHandle: function (data) {
      this.datas = data
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
      var pS = ''
      for (let key in this.select_project_status) {
        let value = this.select_project_status[key]
        if (pS === '') {
          pS = 'p.status = \'' + value + '\''
        } else {
          pS = pS + 'OR p.status = \'' + value + '\''
        }
      }
      var pT = ''
      for (let key in this.select_project_type) {
        let value = this.select_project_type[key]
        if (pT === '') {
          pT = 'p.type = \'' + value + '\''
        } else {
          pT = pT + 'OR p.type = \'' + value + '\''
        }
      }
      let con = ''
      if (pS !== '') {
        con = ' AND (' + pS + ')'
      }
      if (pT !== '') {
        con = con + ' AND (' + pT + ')'
      }
      params.append('con', con)
      window.Vue.axios({
        method: 'post',
        url: url + 'Admin/Projects',
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
    this.getData()
  },
  watch: {
    'select_project_status' () {
      this.getData()
    },
    'select_project_type' () {
      this.getData()
    }
  }
}
</script>