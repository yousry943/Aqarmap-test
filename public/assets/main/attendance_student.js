
Vue.component('v-select', VueSelect.VueSelect);



var app = new Vue({
    el: '#app',
    data: {
        baseUrl:'http://localhost/alexcenter/api/',
        message: 'Hello Vue!',
        educations:[],
        edu_id:'',
        classes:[],
        class_id:'',
        groups:[],
        group_id:'',
        students:[],
        studentss:[],
        student:{},
        btnDisable:false,
        data:[
        ],
        options:[],
        select2:'',
        dated:'',
        date: new Date().toISOString().split('T')[0]    },
    created() {
        this.getEdcation();
    },
    methods:{
        getEdcation: function () {
            var self = this;
            Vue.prototype.$http = axios;
            this.$http
                .get(self.baseUrl+'education')
                .then(function(response) {
                    // vm.users = response.data
                    self.educations = response.data;
                    // console.log( self.educations);
                })
            self.getDate();

        },
        getClass:function () {
            var self = this;
            this.$http
                .get(self.baseUrl+'classes/'+self.edu_id)
                .then(function(response) {
                    self.classes = response.data;
                    console.log(self.classes);
                })
            console.log(self.edu_id);
            self.getDate();

        },

        getGroup:function () {
            var self = this;
            this.$http
                .get(self.baseUrl+'groups/'+self.class_id)
                .then(function(response) {
                    self.groups = response.data;
                    console.log(self.groups);
                })
            console.log(self.class_id);
            this.$http
                .get(self.baseUrl+'student/'+self.class_id)
                .then(function(response) {
                    self.options = response.data;
                    self.students = response.data;
                    console.log(response.data);
                })
            self.getDate();

        },
        addstudent:function () {
            var self = this;
            fetch(self.baseUrl+'attendance-student',{
                method:'post',
                body:JSON.stringify({
                    student_id:self.student.id,
                    group_id:self.group_id,
                    date:self.date
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(res => res.json())
             .then(data => {
                if(data == "found"){
                console.log(data);
                self.$swal(
                        'عملية فاشلة',
                        'تم تسجيل حضور هذا الطالب فى هذه المجموعة اليوم',
                        'error'
                    )
                }else if(data == "foundInSubject"){
                self.$swal(
                    'عملية فاشلة',
                    'تم تسجيل حضور هذا الطالب فى مجموعة لنفس المادة',
                    'error'
                )
            }else{
                self.$swal(
                    'عملية ناجحة',
                    'تم تسجيل حضور الطاب',
                    'success'
                )
            }
            self.student='';


        })

        },
        test:function () {
            var self = this;
            console.log("TESsssssssssssssssssst");

            console.log(this.student.id);
        },
        getDate:function () {
            var self = this;
            fetch(self.baseUrl+'attendance-student/get',{
                method:'post',
                body:JSON.stringify({
                    group_id:self.group_id,
                    date:self.dated
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
                .then(res => res.json())
        .then(data => {
                self.studentss = data;
                console.log(data);
        })
        }
    },
    computed:{
        isComplete(){
            return this.student.id && this.group_id;
        }
    }


})
