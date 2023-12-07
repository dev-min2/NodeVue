<template>
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">갓민교</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item mx-1"><router-link to="/" class="nav-link active" aria-current="page">전체조회</router-link></li>
        <li class="nav-item mx-1"><router-link to="/empInsertForm" class="nav-link active" aria-current="page">사원등록</router-link></li>

      </ul>
    </header>
  </div>

</template>