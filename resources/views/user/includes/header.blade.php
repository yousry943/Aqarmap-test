<section class="top-nav-container mainBgColor">
    <div class="top-nav-wrapper flexBetween">
        <div class="left-nav-wrapper flexCenter">
            <div class="landingDashboard-icon flexCenter">
                <div>
                    <a href="#" target="_self">
                </div>
            </div>

            <div class="sub-nav-wrapper">
                <ul class="flexCenter">


                    <li>
                        <div class="main-nav-link dOne">
                            <span>home</span><span><i class="fas fa-caret-down"></i></span>
                        </div>
                        <div class="sub-nav-link-wrapper showOne">
                            <div class="sub-nav-link">
                                <a href="#">test</a>
                            </div>
                            <div class="sub-nav-link">
                                <a href="#">test</a>
                            </div>
                            <div class="sub-nav-link">
                                <a href="#">test</a>
                            </div>
                        </div>
                    </li>










                </ul>
            </div>
        </div>
        <div class="user-section-wrapper flexCenter">
            <div class="user-data flexBetween">




                <div class="user-img-wrap flexCenter">

                    <img src="{{ asset('assets/easyadmin/assets/images/sort-down.png')}}" class="down-arrow" />
                    <span class="user-name">  {{\Illuminate\Support\Facades\Auth::guard('web')->user()->name}}</span>

                    <img class="user-img" src="{{ asset('assets/easyadmin/assets/images/user.png')}}" />
                </div>
                <div class="user-setting-data">
                    <ul>




                        <li>
                            <a href="{{url('home/user/logout')}}">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mobile-menu-icon flexCenter">
                <img src="assets/images/menu-icon.png" />
            </div>
        </div>
    </div>
</section>
