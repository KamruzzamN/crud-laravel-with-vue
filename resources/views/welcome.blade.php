<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm">
    <div class="wrapper" id="app">
        <!-- Navbar -->
        @include('includes.header')
        <!-- /.navbar -->
        <!-- Main Sidebar Container -->
        @include('includes.sidebar')
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <!-- /.content-wrapper -->
        <!-- Main Footer -->
        <footer class="main-footer">
            <strong>Copyright &copy; 2020 <a href="http://zamanOnline.io">zamanOnline.io</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0
            </div>
        </footer>
    </div>
    <!-- ./wrapper -->
    <!-- jQuery -->
    <script src="{{ asset('js/app.js') }}"></script>
    
</body>

</html>
