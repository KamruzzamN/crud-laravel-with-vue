<template>
    <div>
        <aside class="main-sidebar sidebar-light-success elevation-4">
            <!-- Brand Logo -->
            <a href="/home" class="brand-link navbar-success">
                <img src="images/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Dashboard</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="images/avatar.png" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="/home" class="d-block">{{getUser?getUser.name:'User'}}</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">

                        <li class="nav-item">
                            <router-link to="/home" class="nav-link">
                                <i class="nav-icon fa fa-tachometer"></i>
                                <p>Dashboard</p>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/users" class="nav-link">
                                <i class="nav-icon fa fa-table text-green"></i>
                                <p>Users Options</p>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/tags/index" class="nav-link">
                                <i class="nav-icon fa fa-table text-yellow"></i>
                                <p>Tags Options</p>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/categories/index" class="nav-link">
                                <i class="fa fa-table nav-icon text-pink"></i>
                                <p>Categories Options</p>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <a href="/" class="nav-link" target="_blank">
                                <i class="nav-icon fa fa-table"></i>
                                <p>Website View</p>
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <span class="nav-link span-btn" v-on:click="logout">
                                <i class="nav-icon fa fa-lock text-danger"></i>
                                <p>Logout</p>
                            </span>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>
<script>
export default {
    name: 'Sidebar',
    data(){
        return {

        }
    },
    mounted(){
        //this.$store.dispatch('user');
    },
    computed:{
        getUser(){
            return this.$store.getters.getUser
        }
    },
    methods:{
        logout(){
            this.$Progress.start();
            axios.get('/logout').then((response) => {
                this.$router.push('/login');
                this.$Progress.finish();
            }).catch((error) =>{
                this.$router.push('/home');
            });
        }
    }
}
</script>