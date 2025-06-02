// Devlog posts data
const devlogPosts = [
    {
        id: "post1",
        title: "Game Engine Upgrade Complete",
        date: "June 15, 2023",
        excerpt: "We've successfully upgraded to the latest version of our game engine, bringing new features and performance improvements.",
        image: "../images/screenshots/screenshot1.jpg",
        tags: ["engine", "update"]
    },
    {
        id: "post2",
        title: "New Character Designs",
        date: "May 28, 2023",
        excerpt: "Introducing our new character designs with improved animations and more detailed textures.",
        image: "../images/concept-art/concept1.jpg",
        tags: ["art", "characters"]
    },
    {
        id: "post3",
        title: "Multiplayer Beta Testing",
        date: "April 10, 2023",
        excerpt: "Our multiplayer beta test begins next week - sign up now to get early access!",
        image: "../images/screenshots/screenshot2.jpg",
        tags: ["beta", "multiplayer"]
    },
    {
        id: "post4",
        title: "New Level Design",
        date: "July 5, 2023",
        excerpt: "Check out our new level with challenging puzzles and hidden secrets.",
        image: "../images/screenshots/screenshot3.jpg",
        tags: ["design", "levels"]
    },
    // Add more posts as needed
];

// Function to render devlog posts
function renderDevlogPosts() {
    const container = document.getElementById('devlog-posts');
    
    if (!container) return;
    
    container.innerHTML = devlogPosts.map(post => `
        <article class="devlog-card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <a href="${post.id}.html" class="block">
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-blue-400">${post.date}</span>
                        <div class="flex space-x-2">
                            ${post.tags.map(tag => `<span class="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <h2 class="text-xl font-bold mb-3">${post.title}</h2>
                    <p class="text-gray-400">${post.excerpt}</p>
                    <div class="mt-4 text-blue-400 hover:underline">Read more →</div>
                </div>
            </a>
        </article>
    `).join('');
}

// Render posts when page loads
document.addEventListener('DOMContentLoaded', renderDevlogPosts);
