<script>
    import { onMount } from 'svelte';
    let lessons = [];
  
    onMount(async () => {
        // Example: fetch from API
        // const response = await fetch('/api/lessons');
        // lessons = await response.json();
        
        // For now, manually set
        lessons = [
        { id: 1, title: "Lesson 0 - Basic Drawing", path: "/lesson_0_setup" },
        { id: 2, title: "Lesson 1 - Random Walker", path: "/lesson_1_nature" },
        { id: 3, title: "Lesson 2 - Normal Distribution", path: "/lesson_2_nature" },

    ];
    });
</script>
<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
       <ul class="space-y-2 font-medium">
          <li>
             <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span class="ms-3">Dashboard</span>
             </a>
          </li>
          <li>
            <span class="flex items-center p-2 text-gray-900  font-bold">
              Lessons
            </span>
            <ul class="space-y-1 pl-4">
              {#each lessons as lesson}
                <li>
                  <a href={lesson.path} class="text-sm flex items-center p-2 text-gray-900 rounded-lg group">
                    <span class="ms-3">{lesson.title}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </li>
       </ul>
    </div>
 </aside>