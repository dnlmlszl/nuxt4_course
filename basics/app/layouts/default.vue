<template>
  <div>
    <header>
      <h1>Header</h1>
      <!-- Links -->
      <nav>
        <ul>
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
        </ul>
      </nav>
      <hr />
      <slot />
    </header>
  </div>
</template>
