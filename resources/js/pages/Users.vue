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
                                <h3>Welcome <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#modal-default">Add User <i class="fa fa-user-plus"></i></button></h3>
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
                                    <tr v-for="user in users.data" :key="user.id">
                                        <td>{{user.id}}</td>
                                        <td>{{user.name}}</td>
                                        <td>{{user.email}}</td>
                                        <td>{{user.created_at}}</td>
                                        <td class="text-center">
                                            <div class="btn-group">
                                                <router-link class="btn btn-warning" :to="`/profile/${user.id}/edit/`">
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
                            <div class="card-footer">
                                <pagination :data="users" @pagination-change-page="getResults">
                                    <span slot="prev-nav">Previous</span>
	                                <span slot="next-nav">Next</span>
                                </pagination>
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

        <div class="modal fade" id="modal-default" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New User</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form @submit.prevent="register">
                        <div class="modal-body">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="form.name" name="name" :class="{'is-invalid': form.errors.has('name')}" required autocomplete="name" autofocus>
                                    <has-error :form="form" field="name"></has-error>

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" required autocomplete="email" autofocus>
                                    <has-error :form="form" field="email"></has-error>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            <!-- /.modal-content -->
            </div>
        <!-- /.modal-dialog -->
        </div>
    </div>
    
</template>

<script>

    export default {
        name: "Users",
        data(){
            return {
                users: {},
                form: new Form({
                    name: null,
                    email: null,
                }),
            }
        },

        mounted(){
            this.loadUsers;
        },
        computed:{

            loadUsers(){
                axios.get('/get-users')
                .then((response) => {
                    this.users = response.data.users
                }).catch((error) => {
                    console.log(error)
                });
            }
        },
        methods:{
            register(){
                Swal.fire({
                    title: 'Success',
                    text: 'User Successfully Added :)',
                    icon: 'success'
                });
                $('#modal-default').modal('hide');
                // this.form.post('/register').then((response) =>{
                    
                // }).catch((error) =>{
                //     console.log(error)
                // })
            },

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
                        this.loadUsers;
                        axios.get('/user-delete/'+id)
                        .then((response) => {
                            Swal.fire({
                                title: 'Success',
                                text: 'User Successfully Deleted :)',
                                icon: 'success'
                            });
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
                            icon: 'info'
                        })
                    }
                })
            },

            getResults(page = 1) {
			    axios.get('/get-users?page='+page)
				.then(response => {
					this.users = response.data.users;
				});
		    }
        }
    }
</script>