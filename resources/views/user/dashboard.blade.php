<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
 @include('user.includes.css')
  </head>
  <body>
     @include('user.includes.header')

    <section class="services-data-container">
      <div class="section services-data-wrapper">
        <div class="welcome-user">
          <h1>Welcome, <span class="welcome-user-name">{{\Illuminate\Support\Facades\Auth::guard('web')->user()->name}}</span></h1>
          <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          </p>
        </div>
        <div class="services-items-container">
          <div class="services-items-wrapper flexWrap" id="sortable">
            <div class="services-item account-item">
              <div class="item-line"></div>
              <div class="services-data">
                <a href="statistics.html">
                  <div class="service-item-img">

                    <img src="{{ asset('assets/easyadmin/assets/images/chart.png')}}" />
                  </div>
                  <div class="services-title">
                    <h3>Reports</h3>
                    <p>
                      Accounting is the measurement, processing, and
                      communication of financial and non financial information
                      about economic entities such as ...
                    </p>
                  </div>
                </a>
              </div>
            </div>




            <div class="services-item account-item">
              <div class="item-line"></div>
              <div class="services-data">
                <a href="statistics.html">
                  <div class="service-item-img">

                    <img src="{{ asset('assets/easyadmin/assets/images/chart.png')}}" />
                  </div>
                  <div class="services-title">
                    <h3>Reports</h3>
                    <p>
                      Accounting is the measurement, processing, and
                      communication of financial and non financial information
                      about economic entities such as ...
                    </p>
                  </div>
                </a>
              </div>
            </div>




            <div class="services-item account-item">
              <div class="item-line"></div>
              <div class="services-data">
                <a href="statistics.html">
                  <div class="service-item-img">

                    <img src="{{ asset('assets/easyadmin/assets/images/chart.png')}}" />
                  </div>
                  <div class="services-title">
                    <h3>Reports</h3>
                    <p>
                      Accounting is the measurement, processing, and
                      communication of financial and non financial information
                      about economic entities such as ...
                    </p>
                  </div>
                </a>
              </div>
            </div>





            <div class="services-item account-item">
              <div class="item-line"></div>
              <div class="services-data">
                <a href="statistics.html">
                  <div class="service-item-img">

                    <img src="{{ asset('assets/easyadmin/assets/images/chart.png')}}" />
                  </div>
                  <div class="services-title">
                    <h3>Reports</h3>
                    <p>
                      Accounting is the measurement, processing, and
                      communication of financial and non financial information
                      about economic entities such as ...
                    </p>
                  </div>
                </a>
              </div>
            </div>





            











				</div>

              </div>
            </div>



				</div>

              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
 @include('user.includes.js')
  </body>
</html>
