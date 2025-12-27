const reels = [
  {
    username: "alex_wanderlust",
    likes: 15234,
    shares: 892,
    comments: [
      { user: "sarah_m", text: "This is amazing! 😍" },
      { user: "mike_photo", text: "Great shot!" },
      { user: "travel_bug", text: "Adding this to my bucket list" },
    ],
    reelTitle: "Sunset at Santorini",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=1",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "foodie_adventures",
    likes: 28901,
    shares: 1543,
    comments: [
      { user: "chef_mike", text: "Recipe please! 🙏" },
      { user: "hungry_always", text: "This looks delicious" },
    ],
    reelTitle: "Homemade Ramen Bowl",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=2",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "fitness_guru_jake",
    likes: 42156,
    shares: 2187,
    comments: [
      { user: "gym_rat", text: "Incredible form!" },
      { user: "health_nut", text: "Motivational 💪" },
      { user: "workout_daily", text: "Need this routine" },
    ],
    reelTitle: "Full Body HIIT Workout",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=3",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "tech_reviewer_sam",
    likes: 19876,
    shares: 1092,
    comments: [
      { user: "gadget_lover", text: "Worth the upgrade?" },
      { user: "apple_fan", text: "Looks sleek!" },
    ],
    reelTitle: "iPhone 15 Pro Unboxing",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=4",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "dance_queen_mia",
    likes: 67543,
    shares: 3421,
    comments: [
      { user: "choreographer_leo", text: "Killed it! 🔥" },
      { user: "dancer_pro", text: "Tutorial when?" },
      { user: "music_lover", text: "Song name?" },
    ],
    reelTitle: "Viral Dance Challenge",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=5",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "pet_tales",
    likes: 91234,
    shares: 5672,
    comments: [
      { user: "dog_mom", text: "So cute! 🐶" },
      { user: "animal_love", text: "Made my day" },
      { user: "puppy_fan", text: "I can't even 😭" },
    ],
    reelTitle: "Golden Retriever Puppy Antics",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=6",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "diy_crafts_lily",
    likes: 12456,
    shares: 987,
    comments: [
      { user: "creative_soul", text: "Genius idea!" },
      { user: "craft_addict", text: "Trying this tonight" },
    ],
    reelTitle: "5-Minute Room Decor Hack",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=7",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "comedy_central_max",
    likes: 54321,
    shares: 4231,
    comments: [
      { user: "laugh_daily", text: "Can't stop laughing 😂" },
      { user: "humor_king", text: "Relatable!" },
      { user: "comedy_fan", text: "More please!" },
    ],
    reelTitle: "When Your Mom Calls",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=8",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "nature_shots_emma",
    likes: 23567,
    shares: 1876,
    comments: [
      { user: "wilderness_lover", text: "Breathtaking view" },
      { user: "hiker_life", text: "Where is this?" },
    ],
    reelTitle: "Hidden Waterfall Discovery",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=9",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "fashion_forward_zoe",
    likes: 38912,
    shares: 2456,
    comments: [
      { user: "style_icon", text: "Love this outfit! 👗" },
      { user: "trendy_vibes", text: "Where'd you get the bag?" },
      { user: "fashion_week", text: "Stunning!" },
    ],
    reelTitle: "Spring Fashion Haul 2024",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=10",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "music_producer_jay",
    likes: 45678,
    shares: 3124,
    comments: [
      { user: "beat_maker", text: "Fire beat! 🔥" },
      { user: "studio_time", text: "How'd you mix this?" },
    ],
    reelTitle: "Behind the Beats",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=11",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "car_enthusiast_tom",
    likes: 31245,
    shares: 1987,
    comments: [
      { user: "speed_demon", text: "Dream car! 🏎️" },
      { user: "auto_lover", text: "That engine sound" },
      { user: "garage_goals", text: "Specs?" },
    ],
    reelTitle: "Lamborghini Test Drive",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=12",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "makeup_artist_bella",
    likes: 56789,
    shares: 3987,
    comments: [
      { user: "beauty_guru", text: "Tutorial please!" },
      { user: "glam_squad", text: "What products?" },
      { user: "makeup_addict", text: "Flawless ✨" },
    ],
    reelTitle: "Glamorous Evening Look",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=13",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "gaming_pro_lucas",
    likes: 78234,
    shares: 5123,
    comments: [
      { user: "gamer_tag", text: "Insane clutch!" },
      { user: "esports_fan", text: "Pro level play" },
      { user: "console_king", text: "Teach me 🎮" },
    ],
    reelTitle: "Epic 1v5 Clutch",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=14",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "yoga_with_nina",
    likes: 34567,
    shares: 2341,
    comments: [
      { user: "zen_master", text: "So peaceful 🧘" },
      { user: "wellness_life", text: "Morning routine inspo" },
    ],
    reelTitle: "Sunrise Yoga Flow",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=15",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "street_photographer",
    likes: 27890,
    shares: 1654,
    comments: [
      { user: "camera_nerd", text: "What lens?" },
      { user: "urban_explorer", text: "Perfect timing!" },
      { user: "photo_daily", text: "Love the composition" },
    ],
    reelTitle: "City Life at Night",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=16",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "baking_bliss_sara",
    likes: 41234,
    shares: 2876,
    comments: [
      { user: "sweet_tooth", text: "Recipe? 🍰" },
      { user: "bake_lover", text: "Looks amazing!" },
    ],
    reelTitle: "Chocolate Lava Cake",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=17",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "skateboard_life",
    likes: 62341,
    shares: 4123,
    comments: [
      { user: "skate_crew", text: "Sick trick! 🛹" },
      { user: "extreme_sports", text: "How many tries?" },
      { user: "board_culture", text: "Clean landing" },
    ],
    reelTitle: "Kickflip Down 12 Stairs",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=18",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "plant_parent_joe",
    likes: 18765,
    shares: 1234,
    comments: [
      { user: "green_thumb", text: "Care tips? 🌱" },
      { user: "indoor_jungle", text: "Gorgeous collection" },
    ],
    reelTitle: "My Plant Propagation Station",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=19",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "motivational_mark",
    likes: 89456,
    shares: 6234,
    comments: [
      { user: "success_mindset", text: "Needed this today 🙌" },
      { user: "inspire_daily", text: "Truth!" },
      { user: "goal_getter", text: "Saving this" },
    ],
    reelTitle: "Don't Give Up",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=20",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "science_explained",
    likes: 33456,
    shares: 2567,
    comments: [
      { user: "physics_nerd", text: "Mind blown 🤯" },
      { user: "learn_daily", text: "So cool!" },
    ],
    reelTitle: "How Black Holes Work",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=21",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "beach_vibes_kelly",
    likes: 48923,
    shares: 3421,
    comments: [
      { user: "ocean_lover", text: "Paradise! 🏖️" },
      { user: "tropical_life", text: "Need a vacation" },
      { user: "surf_culture", text: "Perfect waves" },
    ],
    reelTitle: "Maldives Sunrise",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=22",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "coffee_connoisseur",
    likes: 22134,
    shares: 1543,
    comments: [
      { user: "caffeine_addict", text: "Best latte art ☕" },
      { user: "barista_life", text: "Technique?" },
    ],
    reelTitle: "Perfect Latte Art Tutorial",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=23",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "magic_tricks_adam",
    likes: 71234,
    shares: 4987,
    comments: [
      { user: "illusion_fan", text: "How?! 🎩" },
      { user: "card_shark", text: "Reveal please!" },
      { user: "magic_circle", text: "Smooth moves" },
    ],
    reelTitle: "Impossible Card Trick",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=24",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "minimalist_home",
    likes: 36789,
    shares: 2134,
    comments: [
      { user: "clean_aesthetic", text: "Goals! 🏠" },
      { user: "interior_design", text: "Where's the couch from?" },
    ],
    reelTitle: "Living Room Transformation",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=25",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "astronomy_geek",
    likes: 44321,
    shares: 2987,
    comments: [
      { user: "space_nerd", text: "Amazing footage! 🌌" },
      { user: "telescope_club", text: "What equipment?" },
      { user: "star_gazer", text: "Stunning" },
    ],
    reelTitle: "Milky Way Time-lapse",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=26",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "vintage_finds_ruby",
    likes: 29876,
    shares: 1876,
    comments: [
      { user: "thrift_queen", text: "Great find! 👗" },
      { user: "retro_vibes", text: "Love vintage fashion" },
    ],
    reelTitle: "Thrift Store Haul",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=27",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "productivity_hacks",
    likes: 52341,
    shares: 3765,
    comments: [
      { user: "student_life", text: "Trying this! 📚" },
      { user: "work_smart", text: "Game changer" },
      { user: "efficiency_pro", text: "Bookmarked" },
    ],
    reelTitle: "Study Method That Works",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=28",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "drone_pilot_sam",
    likes: 38567,
    shares: 2456,
    comments: [
      { user: "aerial_shots", text: "Epic footage! 🚁" },
      { user: "filmmaker", text: "What drone?" },
    ],
    reelTitle: "Canyon Flythrough",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=29",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "relationship_advice",
    likes: 67890,
    shares: 4532,
    comments: [
      { user: "couples_goals", text: "So true! 💕" },
      { user: "love_tips", text: "Needed to hear this" },
      { user: "dating_life", text: "Facts" },
    ],
    reelTitle: "Green Flags to Look For",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=30",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "guitar_lessons_dan",
    likes: 31298,
    shares: 2109,
    comments: [
      { user: "music_student", text: "Helpful lesson! 🎸" },
      { user: "beginner_player", text: "Finally understand this" },
    ],
    reelTitle: "Easy Chord Progression",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=31",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "urban_gardening",
    likes: 24567,
    shares: 1654,
    comments: [
      { user: "grow_your_own", text: "Smart setup! 🌿" },
      { user: "apartment_life", text: "Doing this!" },
    ],
    reelTitle: "Balcony Garden Tour",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=32",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "animation_studio",
    likes: 56432,
    shares: 3876,
    comments: [
      { user: "artist_community", text: "Smooth animation! ✨" },
      { user: "3d_creator", text: "Software?" },
      { user: "animator_pro", text: "Impressive work" },
    ],
    reelTitle: "Character Design Process",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=33",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "budget_travel_tips",
    likes: 42189,
    shares: 3124,
    comments: [
      { user: "backpacker_life", text: "Saving so much! 💰" },
      { user: "cheap_flights", text: "More tips please" },
    ],
    reelTitle: "Travel Hacks Under $50",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=34",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "tattoo_artist_ink",
    likes: 49876,
    shares: 2987,
    comments: [
      { user: "ink_lover", text: "Beautiful work! 🖊️" },
      { user: "tattoo_ideas", text: "Taking clients?" },
      { user: "body_art", text: "Incredible detail" },
    ],
    reelTitle: "Phoenix Sleeve Progress",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=35",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "meal_prep_master",
    likes: 37654,
    shares: 2543,
    comments: [
      { user: "healthy_eating", text: "Organized! 🍱" },
      { user: "busy_mom", text: "Need this routine" },
    ],
    reelTitle: "Sunday Meal Prep for Week",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=36",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "parkour_ninja",
    likes: 83456,
    shares: 5678,
    comments: [
      { user: "freerunner", text: "Insane! 😱" },
      { user: "extreme_athlete", text: "How do you train?" },
      { user: "urban_sports", text: "Next level" },
    ],
    reelTitle: "Rooftop Backflip",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=37",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "book_recommendations",
    likes: 28934,
    shares: 1876,
    comments: [
      { user: "reader_life", text: "Adding to list! 📖" },
      { user: "book_club", text: "Just finished this" },
    ],
    reelTitle: "Top 5 Must-Read Books",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=38",
    isLiked: false,
    isFollowed: true,
  },
  {
    username: "meditation_guru",
    likes: 34567,
    shares: 2234,
    comments: [
      { user: "mindful_living", text: "Calming voice 🧘" },
      { user: "stress_relief", text: "Daily practice now" },
      { user: "wellness_journey", text: "Thank you" },
    ],
    reelTitle: "5-Minute Morning Meditation",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=39",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "cocktail_mixology",
    likes: 41234,
    shares: 2876,
    comments: [
      { user: "bartender_pro", text: "Perfect technique! 🍸" },
      { user: "drink_recipes", text: "Making tonight" },
    ],
    reelTitle: "Classic Old Fashioned",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=40",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "financial_freedom",
    likes: 58923,
    shares: 4123,
    comments: [
      { user: "invest_smart", text: "Great advice! 💸" },
      { user: "money_tips", text: "Wish I knew this sooner" },
      { user: "wealth_building", text: "Following" },
    ],
    reelTitle: "Passive Income Strategies",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=41",
    isLiked: true,
    isFollowed: false,
  },
  {
    username: "wildlife_explorer",
    likes: 72341,
    shares: 4987,
    comments: [
      { user: "nature_doc", text: "Incredible footage! 🦁" },
      { user: "safari_life", text: "Where was this?" },
      { user: "animal_planet", text: "Majestic" },
    ],
    reelTitle: "Lion Pride Up Close",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=42",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "pottery_studio",
    likes: 26789,
    shares: 1654,
    comments: [
      { user: "ceramic_art", text: "So satisfying! 🏺" },
      { user: "handmade_love", text: "Beautiful piece" },
    ],
    reelTitle: "Throwing a Bowl",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=43",
    isLiked: false,
    isFollowed: false,
  },
  {
    username: "life_coach_maria",
    likes: 45678,
    shares: 3234,
    comments: [
      { user: "self_improvement", text: "Transformative! 🌟" },
      { user: "personal_growth", text: "Changed my perspective" },
      { user: "better_life", text: "More content please" },
    ],
    reelTitle: "Overcome Self-Doubt",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=44",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "home_barista",
    likes: 33456,
    shares: 2109,
    comments: [
      { user: "espresso_lover", text: "Pro setup! ☕" },
      { user: "coffee_snob", text: "Machine specs?" },
    ],
  },
];

let selectedReel = 0;

const showReels = () => {
  const allReels = document.querySelector(".all-reels");
  let clutter = "";

  reels.forEach((reel, idx) => {
    clutter += `
        <div class="reel">
                    <div class="video-container">
                    <div class="custom-controls">
                        <h4 data-play="${idx}" class="play-btn" id="playBtn"><i data-play="${idx}" class="ri-play-fill"></i></h4>
                        <div class="volume-control">
                        <h4 data-volumeBtn="${idx}" class="volume-btn" id="volumeBtn"><i data-index="${idx}" class="ri-volume-up-line"></i></h4>
                        <input data-volumeSlider="${idx}" type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="100">
                    </div>
                </div>
        
                <video id="videoPlayer-${idx}" loop>
                    <source src="${reel.reelVideo}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
        
                <div data-progressBar="${idx}" class="progress-bar" id="progressBar">
                    <div class="progress" id="progress"></div>
                </div>

                    </div>


                    <div class="bottom">
                        <div class="user">
                            <img src="${reel.userProfilePicture}" alt="">
                            <h4>${reel.username}</h4>
                            <button>${
                              reel.isFollowed ? "Followed" : "Follow"
                            }</button>
                        </div>

                        <h3>${reel.reelTitle}</h3>
                    </div>

                    <div class="right">
                        <div class="like">
                            <h4 data-likes="${idx}" class="like-icon icon">${
      reel.isLiked
        ? '<i id="liked" class="ri-heart-3-fill"></i>'
        : '<i class="ri-heart-3-line"></i>'
    }</h4>
                            <h6>${reel.likes}</h6>
                        </div>

                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></i></h4>
                            <h6>${reel.comments.length}</h6>
                        </div>

                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${reel.shares}</h6>
                        </div>

                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></i></h4>
                        </div>
                    </div>
                </div>
    `;
  });

  allReels.innerHTML = clutter;
};

const playPauseFunctionality = () => {
  const playBtn = document.querySelectorAll(".play-btn");
  let isPaused = false;

  playBtn.forEach((e, idx) => {
    e.addEventListener("click", (playPauseBtn) => {
      const index = playPauseBtn.target.dataset.play;

      if (!index) return;

      const video = document.querySelector(`#videoPlayer-${index}`);

      if (isPaused) {
        video.pause();
        e.innerHTML = `<i data-play="${idx}" class="ri-play-fill"></i>`;
        isPaused = !isPaused;
        return;
      }

      if (!isPaused) {
        video.play();
        e.innerHTML = `<i data-play="${idx}" class="ri-pause-fill"></i>`;
        isPaused = !isPaused;
        selectedReel = idx;
        return;
      }
    });
  });
};

const volumeFunctionality = () => {
  const volumeSlider = document.querySelectorAll(".volume-slider");

  volumeSlider.forEach((e) => {
    e.addEventListener("input", (volumeBar) => {
      const volume = volumeBar.target.value;
      const index = volumeBar.target.dataset.volumeslider;
      const video = document.querySelector(`#videoPlayer-${index}`);

      video.volume = volume / 100;
    });
  });
};

const durationFunctionality = () => {
  const progressBar = document.querySelectorAll(".progress-bar");

  progressBar.forEach((e) => {
    e.addEventListener("click", (progressBar) => {
      const index = e.dataset.progressbar;
      const video = document.querySelector(`#videoPlayer-${index}`);

      const clientWidth = e.clientWidth;
      const clickX = progressBar.offsetX;

      const seekTime = (clickX / clientWidth) * video.duration;

      e.childNodes[1].style.width = clickX + "px";
      video.currentTime = seekTime;
    });
  });
};

showReels();
playPauseFunctionality();
volumeFunctionality();
durationFunctionality();

let videoUpdate = document.querySelector(`#videoPlayer-${selectedReel}`);

videoUpdate.addEventListener("timeupdate", () => {
  const percent = (videoUpdate.currentTime / videoUpdate.duration) * 100;
  const progressBar = document.querySelector(
    `.progress-bar[data-progressbar="${selectedReel}"]`
  );
  const progress = progressBar.querySelector(".progress");
  progress.style.width = percent + "%";
});
