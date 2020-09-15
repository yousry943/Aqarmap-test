
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
        subjects:[],
        group_id:'',
        students:[],
        studentss:[],
        notstudents:[],
        student:{},
        btnDisable:false,
        data:[
        ],
        options:[],
        select2:'',
        dated:'',
        subject_id:'',
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
        },
        getSubject:function () {
            var self = this;
            this.$http
                .get(self.baseUrl+'subjects/'+self.class_id)
                .then(function(response) {
                    self.subjects = response.data;
                    console.log(self.groups);
                })
            console.log(self.class_id);
            // this.$http
            //     .get(self.baseUrl+'student/'+self.class_id)
            //     .then(function(response) {
            //         self.options = response.data;
            //         self.students = response.data;
            //         console.log(response.data);
            //     })
            // self.getDate();

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
                    subject_id:self.subject_id,
                    class_id:self.class_id,
                    date:self.dated
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
                .then(res => res.json())
        .then(data => {
                self.studentss = data.student;
                self.notstudents = data.notStudent;
                console.log(data.student);
        })
        }
    },


})
