<template >
	<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand pt-0" href="../index.html">
        <img src="static/assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
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
                <img alt="Image placeholder" src="static/assets/img/theme/team-1-800x800.jpg">
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
                <img src="static/assets/img/brand/blue.png">
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
        <hr class="mb-3 mt-0">
        <!-- Heading -->
        <h6 class="navbar-heading text-muted">賣家面板</h6>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_create()" style="cursor:pointer">
              <i class="fas fa-pen-nib text-primary"></i> 建立訂單
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('115')" style="cursor:pointer">
              <i class="fas fa-dollar-sign text-primary"></i> 待收頭款
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('117')" style="cursor:pointer">
              <i class="fas fa-user-check text-primary"></i> 確認頭款
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('118')" style="cursor:pointer">
              <i class="fas fa-plane text-primary"></i> 未到貨
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('119')" style="cursor:pointer">
              <i class="fas fa-dollar-sign text-primary"></i> 待收尾款
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('120')" style="cursor:pointer">
              <i class="fas fa-user-check text-primary"></i> 確認尾款
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('121')" style="cursor:pointer">
              <i class="fas fa-archive text-primary"></i> 待出貨
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('122')" style="cursor:pointer">
              <i class="fas fa-truck text-primary"></i> 配送中
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="to_seller_list('123')" style="cursor:pointer">
              <i class="fas fa-check-double text-primary"></i> 完成訂單
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
              <i class="fas fa-user-alt"></i> 個人檔案
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
              <i class="fas fa-shipping-fast"></i> 物流設定
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
              <i class="far fa-credit-card"></i> 金流設定
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
              <i class="fas fa-calculator"></i> 平台服務費
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template >

<script>
export default {
  name: 'SellNav',
  methods: {
    to_seller_list: function (statusId) {
      this.$router.replace({name: 'seller_list', params: {info: statusId}})
      this.$router.go()
    },
    to_seller_create: function () {
      this.$router.replace({name: 'seller_create_order'})
    }
  }
}
</script>