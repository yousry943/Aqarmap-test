Vue.component('v-select', VueSelect.VueSelect);
var app = new Vue({
    el: '#app',
    data: {
        baseUrl:'http://localhost/alexcenter/api/',
        baseRoute : 'http://localhost/alexcenter/',
        educations:[],
        edu_id:'',
        classes:[],
        class_id:'',
        subjects:[],
        subject_id:'',
        teachers:[],
        teacher_id:'',
        name:'',
        from:'',
        to:'',
        search:'',
        groups:[]
       },
    created() {
        this.getEdcation();
        this.getGroups();
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

        },
        getTeacher:function(){
            var self =this;
            this.$http
                .get(self.baseUrl+'teacher/'+self.subject_id)
                .then(function(response) {
                    self.teachers = response.data;
                    console.log(self.teachers);
                })
            console.log(self.subject_id);
        },
        addGroup:function(){
            var self = this;
            if(self.name == ''){
                self.$swal(
                    'خطأ',
                    'اسم المجموعة مطلوب',
                    'error'
                )
            }
            fetch(self.baseUrl+'addgroup',{
                method:'post',
                body:JSON.stringify({
                    name:self.name,
                    subject_id:self.subject_id,
                    class_room_id:self.class_id,
                    teacher_id:self.teacher_id,
                    from:self.from,
                    to:self.to,
                }),
                headers:{
                    'content-type':'/json'
                }
            })
            .then(res => res.json())
             .then(data => { 
                self.$swal(
                    'عملية ناجحة',
                    'تم اضافة المجموعة',
                    'success'
                )


        })
        },
        getGroups:function () {
            var self = this;
            this.$http
                .get(self.baseUrl+'getGroups')
                .then(function(response) {
                    self.groups = response.data;
                    console.log(self.groups);
                })
        },
        searchData:function () {
            var self = this;
            fetch(self.baseUrl+'searchGroup',{
                method:'post',
                body:JSON.stringify({
                    data:self.search,
                }),
                headers:{
                    'content-type':'/json'
                }
            }).then(res => res.json())

                 .then(data => {
                     console.log(data);
                     self.groups = data;

        })

        },
        edit:function (id) {
            var self = this;
            window.location=self.baseRoute+"admin/group/"+id+"/edit";
            console.log(id);
        },
        deleteGroup:function (id) {
            var self = this;
            this.$http
                .get(self.baseUrl+'group/'+id+'/delete')
                .then(function(response) {
                    self.$swal(
                        'عملية ناجحة',
                        'تم مسح المجموعة',
                        'success'
                    )
                    self.getGroups();
                    self.groups = response.data;
                    console.log(self.groups);
                })
            console.log(id);
        }
    },
    computed:{
        isComplete(){
            return this.name && this.from && this.to && this.teacher_id;
        }
    }


})
