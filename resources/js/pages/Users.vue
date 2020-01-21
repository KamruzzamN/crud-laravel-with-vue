<template>
    <div class="home">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Users</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/home">Home</a></li>
                            <li class="breadcrumb-item active">Users</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Info boxes -->
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3>Welcome</h3>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Created At</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                    <tr v-for="(user,index) in getUsers" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{user.name}}</td>
                                        <td>{{user.email}}</td>
                                        <td>{{user.created_at}}</td>
                                        <td class="text-center">
                                            <div class="btn-group">
                                                <router-link class="btn btn-warning" to="/edit">
                                                    <i class="fa fa-edit"></i>
                                                </router-link>
                                                <span class="btn btn-danger" v-on:click="deleteUser(user.id)">
                                                    <i class="fa fa-trash"></i>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!--/. container-fluid -->
        </section>
    </div>
    
</template>

<script>

    export default {
        name: "Users",
        data(){
            return {
                user: []
            }
        },

        mounted(){
            this.$store.dispatch('users');
        },
        computed:{
            getUsers(){
                return this.$store.getters.getUsers
            }
        },
        methods:{
            deleteUser(id){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        this.$Progress.start();
                        axios.get('/user-delete/'+id)
                        .then((response) => {
                            this.$store.dispatch('users')
                            Swal.fire({
                                title: 'Success',
                                text: 'User Successfully Deleted :)',
                                icon: 'success'
                            });
                            this.$Progress.finish()
                        })
                        .catch((error) => {
                            Swal.fire({
                                title: 'Error',
                                text: 'User Deleted Fail:)',
                                icon: 'error'
                            })
                        });
                    }
                    else{
                        Swal.fire({
                            title: 'Cancelled',
                            text: 'Your imaginary file is safe :)',
                            icon: 'error'
                        })
                    }
                })
            }
        }
    }
</script>