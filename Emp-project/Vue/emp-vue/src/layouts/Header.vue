<template>
    <div>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <!-- router-link도 a태그임 -->
                <router-link to="/" class="nav-link">전체조회</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/empForm" class="nav-link">사원등록</router-link>
            </li>
        </ul>
    </div>
</template>