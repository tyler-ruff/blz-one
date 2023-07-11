<template>
    <BlzHeader />
    <main>
        <div class="grid grid-cols-1 md:grid-cols-[200px_minmax(900px,_1fr)_100px]">
            <NavDocs />
            <slot />
        </div>
    </main>
    <BlzFooter />
</template>
  