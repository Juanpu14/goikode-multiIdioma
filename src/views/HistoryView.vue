<template>
  <div class="history">
    <h1>{{ $t('history.title') }}</h1>
    
    <div class="history-content">
      <div class="history-text">
        <h2>{{ $t('history.mission.title') }}</h2>
        <p>{{ $t('history.mission.description') }}</p>
        
        <h2>{{ $t('history.history.title') }}</h2>
        <p>{{ $t('history.history.description') }}</p>
        
        <h2>{{ $t('history.team.title') }}</h2>
        <p>{{ $t('history.team.description') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.history-content {
  margin-top: 2rem;
}

h2 {
  color: var(--secondary-color);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>

