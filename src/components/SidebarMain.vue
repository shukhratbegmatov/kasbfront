<template>
  <div class="peo_table">
    <table>
      <thead>
      <tr>
        <th>Имя и фамиля</th>
        <th>IQ Уровен</th>
        <th>Число входов</th>
        <th>Пройденные курсы</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,i) in 10" :key="i">
        <td>Якубова Салима Давроновна</td>
        <td>253</td>
        <td>123</td>
        <td>
          <button>
            Результаты
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
