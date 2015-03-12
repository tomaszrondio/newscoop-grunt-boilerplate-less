<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- grunt boilerplate -->
      <!-- assets versioning -->
      {{ assign var="VER_ENV" value="0.1" scope="global" }}

      <link href="{{ url static_file="assets/css/style.css?v=$VER_ENV" }}" rel="stylesheet">

      <!-- remember to put jquery in header. It is used by newscoop maps -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


    <!-- /grunt boilerplate -->

  </head>