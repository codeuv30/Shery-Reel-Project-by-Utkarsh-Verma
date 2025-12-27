const reels = [
  {
    username: "alex_wanderlust",
    likes: 15234,
    shares: 892,
    comments: [
      {
        user: "sarah_m",
        text: "This is amazing! 😍",
        profilePicture: "https://i.pravatar.cc/150?img=51",
      },
      {
        user: "mike_photo",
        text: "Great shot!",
        profilePicture: "https://i.pravatar.cc/150?img=52",
      },
      {
        user: "travel_bug",
        text: "Adding this to my bucket list",
        profilePicture: "https://i.pravatar.cc/150?img=53",
      },
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
      {
        user: "chef_mike",
        text: "Recipe please! 🙏",
        profilePicture: "https://i.pravatar.cc/150?img=54",
      },
      {
        user: "hungry_always",
        text: "This looks delicious",
        profilePicture: "https://i.pravatar.cc/150?img=55",
      },
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
      {
        user: "gym_rat",
        text: "Incredible form!",
        profilePicture: "https://i.pravatar.cc/150?img=56",
      },
      {
        user: "health_nut",
        text: "Motivational 💪",
        profilePicture: "https://i.pravatar.cc/150?img=57",
      },
      {
        user: "workout_daily",
        text: "Need this routine",
        profilePicture: "https://i.pravatar.cc/150?img=58",
      },
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
      {
        user: "gadget_lover",
        text: "Worth the upgrade?",
        profilePicture: "https://i.pravatar.cc/150?img=59",
      },
      {
        user: "apple_fan",
        text: "Looks sleek!",
        profilePicture: "https://i.pravatar.cc/150?img=60",
      },
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
      {
        user: "choreographer_leo",
        text: "Killed it! 🔥",
        profilePicture: "https://i.pravatar.cc/150?img=61",
      },
      {
        user: "dancer_pro",
        text: "Tutorial when?",
        profilePicture: "https://i.pravatar.cc/150?img=62",
      },
      {
        user: "music_lover",
        text: "Song name?",
        profilePicture: "https://i.pravatar.cc/150?img=63",
      },
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
      {
        user: "dog_mom",
        text: "So cute! 🐶",
        profilePicture: "https://i.pravatar.cc/150?img=64",
      },
      {
        user: "animal_love",
        text: "Made my day",
        profilePicture: "https://i.pravatar.cc/150?img=65",
      },
      {
        user: "puppy_fan",
        text: "I can't even 😭",
        profilePicture: "https://i.pravatar.cc/150?img=66",
      },
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
      {
        user: "creative_soul",
        text: "Genius idea!",
        profilePicture: "https://i.pravatar.cc/150?img=67",
      },
      {
        user: "craft_addict",
        text: "Trying this tonight",
        profilePicture: "https://i.pravatar.cc/150?img=68",
      },
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
      {
        user: "laugh_daily",
        text: "Can't stop laughing 😂",
        profilePicture: "https://i.pravatar.cc/150?img=69",
      },
      {
        user: "humor_king",
        text: "Relatable!",
        profilePicture: "https://i.pravatar.cc/150?img=70",
      },
      {
        user: "comedy_fan",
        text: "More please!",
        profilePicture: "https://i.pravatar.cc/150?img=1",
      },
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
      {
        user: "wilderness_lover",
        text: "Breathtaking view",
        profilePicture: "https://i.pravatar.cc/150?img=2",
      },
      {
        user: "hiker_life",
        text: "Where is this?",
        profilePicture: "https://i.pravatar.cc/150?img=3",
      },
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
      {
        user: "style_icon",
        text: "Love this outfit! 👗",
        profilePicture: "https://i.pravatar.cc/150?img=4",
      },
      {
        user: "trendy_vibes",
        text: "Where'd you get the bag?",
        profilePicture: "https://i.pravatar.cc/150?img=5",
      },
      {
        user: "fashion_week",
        text: "Stunning!",
        profilePicture: "https://i.pravatar.cc/150?img=6",
      },
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
      {
        user: "beat_maker",
        text: "Fire beat! 🔥",
        profilePicture: "https://i.pravatar.cc/150?img=7",
      },
      {
        user: "studio_time",
        text: "How'd you mix this?",
        profilePicture: "https://i.pravatar.cc/150?img=8",
      },
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
      {
        user: "speed_demon",
        text: "Dream car! 🏎️",
        profilePicture: "https://i.pravatar.cc/150?img=9",
      },
      {
        user: "auto_lover",
        text: "That engine sound",
        profilePicture: "https://i.pravatar.cc/150?img=0",
      },
      {
        user: "garage_goals",
        text: "Specs?",
        profilePicture: "https://i.pravatar.cc/150?img=1",
      },
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
      {
        user: "beauty_guru",
        text: "Tutorial please!",
        profilePicture: "https://i.pravatar.cc/150?img=2",
      },
      {
        user: "glam_squad",
        text: "What products?",
        profilePicture: "https://i.pravatar.cc/150?img=3",
      },
      {
        user: "makeup_addict",
        text: "Flawless ✨",
        profilePicture: "https://i.pravatar.cc/150?img=4",
      },
    ],
    reelTitle: "Glamorous Evening Look",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    userProfilePicture: "https://i.pravatar.cc/150?img=3",
    isLiked: true,
    isFollowed: true,
  },
  {
    username: "gaming_pro_lucas",
    likes: 78234,
    shares: 5123,
    comments: [
      {
        user: "gamer_tag",
        text: "Insane clutch!",
        profilePicture: "https://i.pravatar.cc/150?img=5",
      },
      {
        user: "esports_fan",
        text: "Pro level play",
        profilePicture: "https://i.pravatar.cc/150?img=6",
      },
      {
        user: "console_king",
        text: "Teach me 🎮",
        profilePicture: "https://i.pravatar.cc/150?img=7",
      },
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
      {
        user: "zen_master",
        text: "So peaceful 🧘",
        profilePicture: "https://i.pravatar.cc/150?img=8",
      },
      {
        user: "wellness_life",
        text: "Morning routine inspo",
        profilePicture: "https://i.pravatar.cc/150?img=9",
      },
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
      {
        user: "camera_nerd",
        text: "What lens?",
        profilePicture: "https://i.pravatar.cc/150?img=0",
      },
      {
        user: "urban_explorer",
        text: "Perfect timing!",
        profilePicture: "https://i.pravatar.cc/150?img=1",
      },
      {
        user: "photo_daily",
        text: "Love the composition",
        profilePicture: "https://i.pravatar.cc/150?img=2",
      },
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
      {
        user: "sweet_tooth",
        text: "Recipe? 🍰",
        profilePicture: "https://i.pravatar.cc/150?img=3",
      },
      {
        user: "bake_lover",
        text: "Looks amazing!",
        profilePicture: "https://i.pravatar.cc/150?img=4",
      },
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
      {
        user: "skate_crew",
        text: "Sick trick! 🛹",
        profilePicture: "https://i.pravatar.cc/150?img=5",
      },
      {
        user: "extreme_sports",
        text: "How many tries?",
        profilePicture: "https://i.pravatar.cc/150?img=6",
      },
      {
        user: "board_culture",
        text: "Clean landing",
        profilePicture: "https://i.pravatar.cc/150?img=7",
      },
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
      {
        user: "green_thumb",
        text: "Care tips? 🌱",
        profilePicture: "https://i.pravatar.cc/150?img=8",
      },
      {
        user: "indoor_jungle",
        text: "Gorgeous collection",
        profilePicture: "https://i.pravatar.cc/150?img=9",
      },
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
      {
        user: "success_mindset",
        text: "Needed this today 🙌",
        profilePicture: "https://i.pravatar.cc/150?img=1",
      },
      {
        user: "inspire_daily",
        text: "Truth!",
        profilePicture: "https://i.pravatar.cc/150?img=11",
      },
      {
        user: "goal_getter",
        text: "Saving this",
        profilePicture: "https://i.pravatar.cc/150?img=12",
      },
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
      {
        user: "physics_nerd",
        text: "Mind blown 🤯",
        profilePicture: "https://i.pravatar.cc/150?img=13",
      },
      {
        user: "learn_daily",
        text: "So cool!",
        profilePicture: "https://i.pravatar.cc/150?img=14",
      },
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
      {
        user: "ocean_lover",
        text: "Paradise! 🏖️",
        profilePicture: "https://i.pravatar.cc/150?img=15",
      },
      {
        user: "tropical_life",
        text: "Need a vacation",
        profilePicture: "https://i.pravatar.cc/150?img=16",
      },
      {
        user: "surf_culture",
        text: "Perfect waves",
        profilePicture: "https://i.pravatar.cc/150?img=17",
      },
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
      {
        user: "caffeine_addict",
        text: "Best latte art ☕",
        profilePicture: "https://i.pravatar.cc/150?img=18",
      },
      {
        user: "barista_life",
        text: "Technique?",
        profilePicture: "https://i.pravatar.cc/150?img=19",
      },
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
      {
        user: "illusion_fan",
        text: "How?! 🎩",
        profilePicture: "https://i.pravatar.cc/150?img=10",
      },
      {
        user: "card_shark",
        text: "Reveal please!",
        profilePicture: "https://i.pravatar.cc/150?img=11",
      },
      {
        user: "magic_circle",
        text: "Smooth moves",
        profilePicture: "https://i.pravatar.cc/150?img=12",
      },
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
      {
        user: "clean_aesthetic",
        text: "Goals! 🏠",
        profilePicture: "https://i.pravatar.cc/150?img=13",
      },
      {
        user: "interior_design",
        text: "Where's the couch from?",
        profilePicture: "https://i.pravatar.cc/150?img=14",
      },
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
      {
        user: "space_nerd",
        text: "Amazing footage! 🌌",
        profilePicture: "https://i.pravatar.cc/150?img=15",
      },
      {
        user: "telescope_club",
        text: "What equipment?",
        profilePicture: "https://i.pravatar.cc/150?img=16",
      },
      {
        user: "star_gazer",
        text: "Stunning",
        profilePicture: "https://i.pravatar.cc/150?img=17",
      },
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
      {
        user: "thrift_queen",
        text: "Great find! 👗",
        profilePicture: "https://i.pravatar.cc/150?img=18",
      },
      {
        user: "retro_vibes",
        text: "Love vintage fashion",
        profilePicture: "https://i.pravatar.cc/150?img=19",
      },
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
      {
        user: "student_life",
        text: "Trying this! 📚",
        profilePicture: "https://i.pravatar.cc/150?img=10",
      },
      {
        user: "work_smart",
        text: "Game changer",
        profilePicture: "https://i.pravatar.cc/150?img=21",
      },
      {
        user: "efficiency_pro",
        text: "Bookmarked",
        profilePicture: "https://i.pravatar.cc/150?img=12",
      },
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
      {
        user: "aerial_shots",
        text: "Epic footage! 🚁",
        profilePicture: "https://i.pravatar.cc/150?img=13",
      },
      {
        user: "filmmaker",
        text: "What drone?",
        profilePicture: "https://i.pravatar.cc/150?img=24",
      },
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
      {
        user: "couples_goals",
        text: "So true! 💕",
        profilePicture: "https://i.pravatar.cc/150?img=25",
      },
      {
        user: "love_tips",
        text: "Needed to hear this",
        profilePicture: "https://i.pravatar.cc/150?img=26",
      },
      {
        user: "dating_life",
        text: "Facts",
        profilePicture: "https://i.pravatar.cc/150?img=27",
      },
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
      {
        user: "music_student",
        text: "Helpful lesson! 🎸",
        profilePicture: "https://i.pravatar.cc/150?img=28",
      },
      {
        user: "beginner_player",
        text: "Finally understand this",
        profilePicture: "https://i.pravatar.cc/150?img=29",
      },
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
      {
        user: "grow_your_own",
        text: "Smart setup! 🌿",
        profilePicture: "https://i.pravatar.cc/150?img=30",
      },
      {
        user: "apartment_life",
        text: "Doing this!",
        profilePicture: "https://i.pravatar.cc/150?img=31",
      },
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
      {
        user: "artist_community",
        text: "Smooth animation! ✨",
        profilePicture: "https://i.pravatar.cc/150?img=12",
      },
      {
        user: "3d_creator",
        text: "Software?",
        profilePicture: "https://i.pravatar.cc/150?img=33",
      },
      {
        user: "animator_pro",
        text: "Impressive work",
        profilePicture: "https://i.pravatar.cc/150?img=13",
      },
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
      {
        user: "backpacker_life",
        text: "Saving so much! 💰",
        profilePicture: "https://i.pravatar.cc/150?img=13",
      },
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
                        <h4 data-volumeBtn="${idx}" class="volume-btn" id="volumeBtn-${idx}"><i data-index="${idx}" class="ri-volume-up-line"></i></h4>
                        <input data-volumeSlider="${idx}" type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="100">
                    </div>
                </div>
        
                <video data-video="${idx}" class="videoPlayer" id="videoPlayer-${idx}" loop>
                    <source src="${reel.reelVideo}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
        
                <div data-progressBar="${idx}" class="progress-bar" id="progressBar-${idx}">
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
                            <h6 id="likes-count-${idx}">${reel.likes}</h6>
                        </div>

                        <div class="comment">
                            <h4 data-comment="${idx}" class="comment-icon icon"><i class="ri-chat-3-line"></i></i></h4>
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

                    <div id="comment-section-${idx}" class="commentSection">
                        <header>
                            <h2>Comments.</h2>
                            <h4 class="close-icon" id="close-icon-${idx}" data-close="${idx}" ><i class="ri-close-large-fill"></i></h4>
                        </header>

                        <div class="restSection">
                        ${reel.comments
                          .map((comment) => {
                            return `
                                <div class="comment">
                            <div class="user">
                                <img src="${comment.profilePicture}" alt="">
                                <h4>${comment.user}</h4>
                            </div>

                            <div class="text">
                                <h5>${comment.text}</h5>
                            </div>
                        </div>
                            `;
                          })
                          .join("")}
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

const likeFunctionality = () => {
  const likeIcon = document.querySelectorAll(".like-icon");

  likeIcon.forEach((e) => {
    const index = e.dataset.likes;
    const reel = reels[index];
    const likesCountH6 = document.querySelector(`#likes-count-${index}`);

    let isLiked = reel.isLiked;

    e.addEventListener("click", () => {
      if (isLiked) {
        e.innerHTML = `<i class="ri-heart-3-line"></i>`;
        isLiked = !isLiked;
        reel.isLiked = isLiked;
        reel.likes = reel.likes - 1;
        likesCountH6.innerHTML = reel.likes;
        return;
      }

      if (!isLiked) {
        e.innerHTML = `<i id="liked" class="ri-heart-3-fill"></i>`;
        isLiked = !isLiked;
        reel.isLiked = isLiked;
        reel.likes = reel.likes + 1;
        likesCountH6.innerHTML = reel.likes;
        return;
      }
    });
  });
};

let isCommentBoxOpen = false;

const openCommentFunctionality = () => {
  const commentIcon = document.querySelectorAll(".comment-icon");

  commentIcon.forEach((commentIcon) => {
    commentIcon.addEventListener("click", (e) => {
      const idx = commentIcon.dataset.comment;
      let commentSection = document.querySelector(`#comment-section-${idx}`);

      if (!isCommentBoxOpen) {
        commentSection.style.height = "300px";
        commentSection.style.padding = "20px 10px";
        isCommentBoxOpen = !isCommentBoxOpen;
        return;
      }
    });
  });
};

const closeCommentFunctionality = () => {
  const closeIcon = document.querySelectorAll(`.close-icon`);

  closeIcon.forEach((closeIcon) => {
    closeIcon.addEventListener("click", (e) => {
      const idx = closeIcon.dataset.close;
      let commentSection = document.querySelector(`#comment-section-${idx}`);

      commentSection.style.height = 0;
      commentSection.style.padding = 0;

      isCommentBoxOpen = !isCommentBoxOpen;
    });
  });
};

showReels();
playPauseFunctionality();
volumeFunctionality();
durationFunctionality();
likeFunctionality();
openCommentFunctionality();
closeCommentFunctionality();

let videoUpdate = document.querySelectorAll(`.videoPlayer`);

videoUpdate.forEach((e) => {
  e.addEventListener("timeupdate", () => {
    const percent = (e.currentTime / e.duration) * 100;
    const progressBar = document.querySelector(`#progressBar-${selectedReel}`);
    const progress = progressBar.querySelector(".progress");

    progress.style.width = percent + "%";
  });
});

let volumeBtnUpdate = document.querySelectorAll('.volume-slider');

volumeBtnUpdate.forEach((volumeBtn) => {
    volumeBtn.addEventListener("input", (e) => {
        const index = volumeBtn.dataset.volumeslider;

        const volumeBtns = document.querySelector(`#volumeBtn-${index}`);
        const volume = volumeBtn.value;
        console.log(volume)

        if(+volume === 0) {
          return volumeBtns.innerHTML = `<i data-index="${index}" class="ri-volume-mute-line"></i>`;
        }

        if(+volume < 50) {
          return volumeBtns.innerHTML = `<i data-index="${index}" class="ri-volume-down-line"></i>`;
        }

        if(+volume > 51) {
          return volumeBtns.innerHTML = `<i data-index="${index}" class="ri-volume-up-line"></i>`;
        }

    });
})
