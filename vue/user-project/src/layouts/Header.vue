<template>
    <div>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <!-- router-link도 a태그임 -->
                <router-link to="/" class="nav-link">전체조회</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/userInsert" class="nav-link">등록크</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </div>
</template>