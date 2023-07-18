-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sec_website
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalog` (
  `itemID` int(11) NOT NULL,
  `itemName` varchar(100) NOT NULL,
  `itemDescription` varchar(5000) NOT NULL,
  `itemPrice` varchar(45) NOT NULL,
  `inStock` int(11) NOT NULL,
  `href` varchar(2000) NOT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
INSERT INTO `catalog` VALUES (6,'Logitech G213 Prodigy Gaming Keyboard','This Logitech G213 Prodigy Gaming Keyboard has been specially designed for gaming thanks to its responsive feedback, fast report rate and anti-ghosting matrix. It features bright lighting zones that change colour so you can pair sequences to match games or simply to reflect your personality or favourite colours. It also has an integrated palm rest for added comfort and dedicated media controls so you can control your games efficiently. It features dome keys that are specially tuned to deliver a tactile response. The anti ghosting matrix keeps you in control when you are pressing multiple keys simultaneously. It features 5 lighting zones in a spectrum of up to 16.8 million colours for an immersive experience. The keyboard is spill resistant and has been tested to a 60 mL rating. The integrated palm rest is for added comfort while the adjustable feet allows you to set your keyboard into the ideal position. You can pause, skip, play, mute and adjust volumes thanks to the dedicated music keys.','$89.00',9,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqFG9jA2X81z1D58CLMtT9p6spzi6vWZwxGQQa1hLRu4mDDDVpX9xno83IitwOexZq8Tb94d1tqFv-tuUkS5cocgaTRSrPednNQ7hK3bs'),(5,'Redragon K617 Fizz 60% Wired RGB','A 60% tenkeyless design and detachable cable mean more room for mousing and easier travel to any gaming party or match around the world. The mechanical red switch offers the quietest switch sound and smooth linear key travel, one strike is enough for you to win.','$75.50',23,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkbLIoJEOQsWG5yMLhcNixAv6iN4PLQeeLAP793ZD4uBM_MNO0OSAd4GP-ofVHOllxpsPc0AWkzzTvGiODjnjiFjwqumZcqS_HuHUILLOYl-uzsYwUmuUL'),(4,'Varmilo Summit R2 White LED','The Varmilo Summit R2 White LED Mechanical Keyboard Cherry Blue is a full-sized keyboard that features Cherry MX Blue switches, Summit themed design, high-quality PBT double-shot keycaps, N-Key rollover, mini-USB connector, adjustable keyboard feet and white LED backlighting.','$199.00',10,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXRemRSHQriCek4c7C7qKxFhbwzs2qf20b5sjkjXh9Szvc4m0AKOYJ6EPZKu8Pn-KC4s4mrzwvc61m8IU02p1it7SpAd7j&usqp=CAY'),(2,'Redragon K630 60 RGB Wired','Redragon 60% design in wired-only mode due to popular demand. 61 anti-ghosting keys for ultra-compact and minimalistic design. Up to 13 presets backlighting modes are free to choose by the keyboard itself. Brightness and flowing speed is also adjustable on board. Select your own preferred modes for any playing.','$48.30',12,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg4ACi1QJ7qJKlAugzE1i4mLbMyFYm44DBU04GaBa7pcFeGKRwLhXAREcS_ZHxnzDM9UmpBFZ74pKg1jRfrDuDA52IC5cF&usqp=CAY'),(7,'Razer BlackWidow V3 Tenkeyless','Mean performance in a leaner formenter the Razer BlackWidow V3 Tenkeyless. Continuing an iconic legacy, this compact gaming keyboard is armed with our world-renowned Razer Mechanical Switches and powered by Razer Chroma RGB, for a level of precision and personalization beloved by gamers worldwide.','$138.50',5,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZJQ7XTjnvdwWKAELo6BDBaEz3EkUqkOhlm0VmITcixcLdEuOSfkol3neWKZ-4l5iPsnZZX9Y2Kny4EumO5WdNRak-XF3zzoMl1boTK2hEqpu0olGe_CwI'),(8,'Corsair K60 Pro Mechanical Gaming Keyboard','The CORSAIR K60 PRO Mechanical Gaming Keyboard is built for both style and substance with a durable brushed aluminum frame and CHERRY VIOLA mechanical keyswitches. Light up your desktop with vivid per-key red LED backlighting, and gain an edge in-game with key remaps and custom macros through powerful CORSAIR iCUE software. A sturdy brushed aluminum frame with black anodization delivers a stylish, modern look and years of battle-tested durability. 100% German-made CHERRY VIOLA mechanical keyswitches offer smooth linear travel with fast and precise inputs. Illuminate your desktop with vivid per-key red LED backlighting, fully customizable with a multitude of effects, enhanced by amplified underglow keycaps with a standard bottom row. Powerful CORSAIR iCUE software enables lighting control, key remaps, custom macro programming, and more. Full N-key rollover (NKRO) with 100% anti-ghosting ensures that every keypress registers, no matter how fast you play. Activate Windows Key Lock mode to guarantee that you\"ll never accidentally interrupt your game at critical moments. Convenient keyboard shortcuts let you control media playback, volume, and onboard lighting on-the-fly','$89.00',7,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSEahlLLBksgBCbbYwVZSFkisG-WZ6A6UVWa5PiJ_jeFNYQafK2He5XadoxuX8X-P_CazBd_tPxQTRSTX-G4eC5yn8arwVOZXuBrFiZi8yeP0fUuBYZ_ntytg'),(9,'Corsair K65 RGB Mini 60%','Compact and functional, the Corsair K65 mini gaming keyboard takes your gaming to a whole new level. It features Cherry MX Speed RGB mechanical switches layered with PBT double-shot keycaps, customisable RGB lighting, custom remaps, and up to 8MB of onboard storage. It has detachable braided USB-C cable for reliable connectivity','$328.99',6,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRk3fuA5DkUi1u0Pa_FcG3rpv-YZ5-eh7_h09z9HFCl1AvfJJ5-9HlQyD7Yild_EO4LH5hiivgrD7tR7zVaD5O8AOKHp_kr-k6xfyOQ4rDCfwDRnXBoVxDr'),(10,'Razer Huntsman Mini 60%','Dominate on a different scale with the Razer Huntsman Minia 60% gaming keyboard with cutting-edge Razer Optical Switches. Highly portable and ideal for streamlined setups, its time to experience lightning-fast actuation in our most compact form factor yet. Available in black and mercury editions. Razer optical switches offers faster, lighter, and smoother actuations than mechanical switches, and lasts longer as it requires fewer moving parts that operate with less friction. Razer Optical Switches for actuation at the speed of light. Offers faster, lighter, and smoother actuations than mechanical switches, and lasts longer as it requires fewer moving parts that operate with less friction. Comes in two variantsLinear and Clicky. Designed for greater durability, the doubleshot PBT Keycaps with side-printed secondary functions will never degrade to a shiny finish or have their labelling wear off with intense use. Side-printed secondary functions included for easier reference. Store and activate up to 5 keyboard profiles without the need for software, as you personalize it further with a suite of Razer Chroma RGB lighting effects already loaded into the keyboard. Ideal for minimalist or smaller setups where desk space is a premium. Its compact build also means it travels well and is easier to position when gamingallowing you to play more comfortably. Unpack, plug and play with minimal fuss for all your LAN parties and tournaments. A cable latch ensures that it stays securely connected during gameplay','$142.50',9,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSw_XBx-gQFJwdQEzQri5QmI7FcqFp-IyDQaBiMI6IVdH83KvLHicnsJCEMb_3yNxBw-duwT4Kre0NW2kTvZDX7BkHZzG_QWFa7B-ymeDurBd53ZAZRx_I_PQ'),(12,'Kogan Full RGB Mechanical Keyboard','Game and code like a professional without the heavy price tag thanks to the Kogan Full RGB Mechanical Keyboard (Red Switch), helping you win every battle with style and ease. Full RGB mechanical keyboard Per-key lighting allows for colour customisation on each key 104 Backlit keys Outemu Red switch Aluminium top keyboard Fully customisable RGB backlight with software 13 Preset Light Patterns each with 8 colour options Full anti-ghosting and n-key rollover capabilities 5 Onboard customisable profiles Compatible with Cherry MX keycaps The Kogan Full RGB Mechanical Keyboard (Red Switch) is a must-have for both amateur and serious gamers, giving you match-winning fully responsive mechanical keys without hurting the wallet. Outemu red switch Outemu Red switches are linear with a light weighting, so you can press the key switch faster and register keystrokes more rapidly without a click to overcome or dome to compress. Per-key RGB lighting Navigate the keyboard with greater ease thanks to the stylish backlit keys and per-key RGB lighting that provides you with total customisation as it allows you to change the colour of each individual key. Seamless multi-functionality The anti-ghosting and n-key rollover technology means that the keyboard can flawlessly handle pressing multiple keys at once, delivering a truly smooth gaming experience as you duel it out with friends, or write code at a furious rate. Customise your way With vivid dynamic RGB lighting control, interchangeable Cherry MX keycaps, sophisticated macro programming and full system lighting synchronisation, you can set your preferred settings to maximise efficiency at work and dominate enemies with ease in the gaming world. Storage of up to five customisable profiles allows immediate access to different settings, independent of external software.','$34.99 ',6,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzn9J5HJ4VfCFx4X_BCP-hcuS6mMalxosJ1g5Po36ArVFCsY8_cbNmsWjw_2BVgI-gsVEdS1QH2p9lPlm9QHZVX5krWdSB0ZHWs9L8-FMmRXYJ01sLQRlC55utd7cP'),(14,'Vortex Poker 3 RGB LED Mechanical Keyboard','The Vortexgear RGB POK3R is the world\'s first small size keyboard with RGB LEDs. It\'s integrating 3 kind of layout. Also features 3 layers customization options individually programmable key codes and LEDs, all easily set through what you want.','$199.00',4,'https://cdn.mwave.com.au/images/400/vortex_poker_3_rgb_led_mechanical_keyboard_cherry_mx_blue_ac42552.jpg'),(17,'Asus ROG Strix Scope RX/RD EVA Edition','It’s 2022. The Republic of Gamers is launching new equipment for the EVANGELION project. The ROG Strix Scope RX EVA Edition proudly wraps an EVA-inspired purple aluminum case around a full complement of ROG RX optical mechanical switches. This formidable combo consistently provides wobble-free keystrokes, a near-zero debounce delay, plus IP57 waterproofing and dust resistance for reliable deployment throughout prolonged campaigns.','$229.00',7,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXN8OMXoGyL6t9Ni9AQxWNvs8GYBSiHWMR0vOgaJ9PF_NC9O1eLe4pmfcqSTa1_rmerrpKL-N_bFXjNNjMNkIbiqBT2cAWPSq2F33lKVj7Kws_-Lw8-LdMPOWm1x7Z'),(18,'Cooler Master CK530 V2 RGB TKL','A portable, tenkeyless format allows you to take your gear without sacrificing features or performance. Mechanical switches rated for 50 million clicks will guarantee your keyboard will stay combat-ready during all your long-lasting skirmishes. On-the-Fly Controls allow customization of your settings like RGB lighting and macros in real-time, while software lets you get even further customization. The included wrist rest will ensure you stay comfortable during long gaming sessions. Simply put, the CK530 V2 is a capable tool that gets the job done.','$79.00',20,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGlHyTrYI1KyyvB2l1qvxenCpywDUE1M94aKAGDoK0NUU75v4VttGY5Vvx9mK9_21kksuZiwt7P8uuRB6JkV-B4f79FEJg3vE5MwiTxlkvN1ISO-O3SF_Ql3wWRtY'),(19,'Cooler Master SK622 Hybrid Wireless','The SK622 hybrid wireless gaming keyboard takes a modern approach to the classic mechanical keyboard with low profile switches housed in a sleek chassis for a drool-worthy aesthetic. The 60% keyboard layout is outfitted with low profile mechanical RGB switches with upgraded ergonomic keycaps from the previous version for a typing experience that feels as good as the keyboard looks. Add in hybrid connectivity that lets you choose between wired or Bluetooth wireless use on both Mac and Windows devices, and you have the ultimate on-the-go keyboard for both work and play.','$89.00',12,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHL2B40Mqg2liKKGRJz-sELyp9nYZg3j3WQAXz0xVRiJk-kDpBT2QzgnwZ0Zl1V7PZT6psaqg6J5lHXp0C9isjkYHeFimreU7hcM1shADszZhFiX6m2naFBXm5LYXz'),(20,'Cooler Master SK650 RGB Low Profile','Improve your gaming performance with this Cooler Master full mechanical keyboard. The RGB backlighting lets you customize your colors and helps you see the keys in low light, and the extra-flat key caps increase precision as you type. This Cooler Master full mechanical keyboard has a slim design that saves space on your desktop.','$214.70',23,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9Lo9i7jkyu1M4zG9PbB60F8Fn-OjOY8pOnzqGNYydRMmebTpF48HTyZ7es7PjqBPNLOe8Z1c5mzg3TRlVhhM6JjAIDh4aZloJBsQeUepEno3W1WCfBz3c_fzw0LE7'),(21,'Glorious GMMK RGB TKL White Ice','GMMK Keyboard Tenkeyless - PreBuilt - USA, 87-key layout. Hot-swappable switches. Easily remove and install any MX-based switch without any soldering. Personalize to what works for you, and use any combinations of switches!','$179.00',16,'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvs4dNvOPwidr1AlWsNEpJaskKdqG8pids9H995ljGCJ1MpMiL4x7BHafdOfzOpD_Y-tM7iMRKbIZXPy01TJIRZ3aRCaTx_Ed6nh_2&usqp=CAY'),(22,'Glorious Modular Mechanical Gaming Keyboard','This GMMK-TKL is ourTenkeyless (87 Key) model, preinstalled with Gateron Brown switches. The Glorious keyboard is the world\'s first Modular Mechanical Gaming Keyboard that allows you to easily swap between Cherry, Gateron, & Kailh switches. Minimalistic design. no branding.','$172.27',13,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfoPaICCiNdQXNk_sV4s-5HcPrZSwLnyZSvtSBRCbrgDBtwHk-EztYeoJ_4e5rs9NOG3zm4yjg8P14h1B9ZKfsozSCwfu6XKcmpCLIPN-wJo38GwLMgR3jaGpjVN4'),(23,'Glorious GMMK 2 65 Pre-built Keyboard Black','Glorious has released a must-have for keyboard enthusiasts: the GMMK 2 keyboard. This pre-built model supports 5-pin hot-swapping, providing the perfect foundation for customization. Featuring Glorious Fox Switches, the Glorious GMMK 2 Pre-Built gives you a classic linear typing experience. The frictional resistance of the switches is minimal thanks to pre-applied lubricant. The haptic feedback ensures smooth typing and flawless acoustics. Thanks to USB-N-Key rollover, any number of keys can be pressed simultaneously without ghosting or other delays.','$179.00',14,'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLZJKboxgYgP5PD_oPMugwIdPStwtk2pTrzK-mdF5IZJ1WN8VfotId68lKlAk3xIjO8ltYiRjZtL4TSfte3jzP_9uVf3mXkai8jM4&usqp=CAY'),(11,'Tecware Spectre Pro Backlit Mechanical Gaming Keyboard','RGB UNDERGLOW - Decked with RGB lighting on the keys and along the sides for that immersive RGB underglow. Pick between 18 preset lighting modes or create your own custom configuration to match your setup. MECHANICAL SWITCHES - Equipped with Outemu Mechanical switches, available in Red, Brown, or Blue switch options, for optimum typing experience. Includes spare switches and tools required for easy replacement. VOLUME WHEEL - Adjust volume quickly when listening to music, streaming videos, or when you\'re on a call. DOUBLE-SHOT KEYCAPS - Our dual-injection molded keycaps guarantee high resistance against surface wear that lasts longer. SPEED ADVANTAGE - Equipped with full N-key rollover and 1000Hz polling rate, giving you the speed and responsiveness you need in intense, high-pressure situations. Tecware Spectre PRO USB Backlit Mechanical Gaming Keyboard - Brown Switch Dedicated Volume Knob Adjust volume quickly when listening to music, streaming videos, or when you\'re on a call. Customizable RGB Lighting on the knob with pre-set lighting modes. Outemu Mechanical Switches Spectre Pro comes pre-installed with Outemu mechanical switches, reliable for 50 million keystrokes. Outemu Brown: Feel: Tactile Noise Level: Medium Actuation Force: 55g Actuation Distance: 2.0mm Travel Distance: 4.0mm FEATURES -104-Key / Tenkeyless -Standard US ANSI Keyboard Layout -Volume Wheel w/ RGB LEDs -RGB LED Side Underglow -Outemu Mechanical Switches -16.8 million RGB Per-key Customization -Replaceable Switches w/ Spare Switches & Tools Included -Non-Fade Double-shot ABS Keycaps -1.8m Detachable Braided USB-C Cable -N-key Rollover, 1000Hz Polling Rate SPECIFICATIONS Model: Spectre Pro Dimensions: 450 x 147 x 35mm Weight: 1.17kg Layout: 104-Key, Full-size Legend: Standard US QWERTY Switch Lifespan: 50 million keystrokes Cable Length: 1.8m Detachable Braided USB-C cable Frame: Black ABS Frame Switch Type: Outemu Mechanical Switches Keycaps: Double-shot ABS Keycaps LEDs: SMD LEDs Package Contents 1x Spectre Pro Keyboard 1x USB-C to USB cable 4x Spare Mechanical Switch 1x Switch Puller 1x Keycap Puller','$79.95',7,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKc4pRz8HGrI609aTK5gTjI_PmQ-FryvbkCM_tS5gRw6sgVE-F0nJC5nVih1ExL4YAr1PUPITE8nNzQ9GUvmWdGrQIUBrtYYETo9qln7OjdRsrsnZ4QAwPE3ck4Choxg'),(13,'RK Royal Kludge RK61 Wireless 60 Mechanical Gaming Keyboard Brown Switch','ROYAL KLUDGE RK61 white 60 percent keyboard with Ultra-compact layout with 61 keys makes you a neat desktop with your organized gears on, even folks who have nothing to do with Minimalist will dive into its tiny practical design. Tips you might want to know is that a keyboard without Numpad is most FPS gamers’ choice.','$67.29',9,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMLBGpLXwM1yXhn8JxIjbkTzPntOIhaHnKa5S7gTUIlIw5lY9TlvZ1XptRtxi4VPr8wfCW3Q0R1TIRpV2FSbW14aCkOchUMSzwifJe&usqp=CAY'),(15,'Asus ROG Strix Scope RX/BL Gaming Keyboard ROG RX','PLAY AT THE SPEED OF LIGHT Take on all comers with ROG Strix Scope RX, the first mechanical RGB gaming keyboard featuring exclusive ROG RX optical mechanical switches. These switches provide a 100-million-keystroke lifespan and offer consistent linear keystrokes with immediate response. In addition, each switch has a central RGB LED to give every key all-round lighting. Strix Scope RX also offers IP57 waterproof and dust resistance, an alloy top cover, and USB 2.0 passthrough. Like all Strix Scope series gaming keyboards, it has a wider Ctrl key and a Stealth key for FPS gamers. Go confidently into battle with ROG Strix Scope RX. Key Features ROG RX OPTICAL MECHANICAL SWITCHES ROG RX Red and RX Blue optical mechanical switches offer consistent, wobble-free keystrokes with a superfast 1 ms response and 100-million-keystroke lifespan. These premium switches have a hollow-square stem design and they feature embedded RGB LEDs providing all-round per-key lighting. PBT DOUBLESHOT KEYCAPS ROG PBT Doubleshot Keycaps provide a unique and premium feel, as well as offer long-lasting durability. The precise double-shot molding process results in translucent keycaps* that feature seamless ROG script for a unique look, offering consistent lighting and a look that’s unmistakably ROG. BUILT TO LAST ROG Strix Scope RX offers industry-leading IP57 waterproof and dust resistance, ensuring it’s well-protected from spills and dust. It also has a durable aluminum alloy top plate that provides structural rigidity to give you long-lasting and reliable performance. USB 2.0 Passthrough Convenient USB 2.0 passthrough lets you plug in a mouse or flash drive, or charge mobile devices. CRAFTED FOR FPS GAMERS After studying the play style of FPS gamers, the ROG R&D team created Xccurate Design: a Ctrl key that’s twice as wide as usual. In the heat of battle, the larger size makes it easy to quickly find and hit. INSTANT PRIVACY Marked with an iconic cloaked-figure keycap, the Stealth key instantly hides all apps and mutes all audio, assuring instant privacy, whenever you need it. A simple tap engages it, and another tap brings apps and audio back up, as they were. READY FOR WORK OR PLAY The Quick-Toggle Switch prepares ROG Strix Scope RX for gaming or the daily grind, toggling the top row between Media or Function (Fn) key input – so it\'s easy to switch modes for work or play. The keyboard is topped with an aluminum faceplate for everyday resilience, and finished with a striking slash aesthetic for a little touch of style. AURA SYNC Vibrant per-key backlighting illuminates Strix Scope from top to bottom and edge to edge. Powered by Aura Sync, the entire color spectrum and a range of dynamic lighting effects are at your command for you to create a keyboard that\'s uniquely yours. The lighting is easily synced with the extensive Aura ecosystem to create a gaming environment that really shines.','$180.91',4,'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqaN8UqMXVDiAWoAIv0fsLnTmY5sozUWCRAmG1Wh_kjEtvC4zBgGebAuvzxi6RWNMu0x44cmRzsiUo6U0eXUBvF2liTBdMqi_r5DaBW_7cmwA_eDHMcxThqy_bwBc'),(16,'Asus ROG Strix Scope TKL Electro Punk Mechanical Gaming Keyboard','TKL Form Factor for FPS ROG Strix Scope TKL Electro Punk is a high-performance mechanical gaming keyboard with a small footprint, freeing up space on your worktop for broader mouse movements – perfect for the lower sensitivity settings that slow the reticle for leveled-up aiming accuracy. The keyboard is topped with an aluminum faceplate for everyday resilience, and finished with a striking slash aesthetic for a little touch of style. Instant Privacy A quick tap of ROG Strix Scope TKL Electro Punk\'s Stealth key instantly hides all apps and mutes all audio, assuring privacy the moment you need it. Decorated with an iconic cloaked-figure motif, a second push of Stealth puts everything back to just the way it was. Get Ready to Sizzle with Electro Punk Abandon restraint and bare your soul with the new ROG Electro Punk range! Designed to let you express your real self to the world, Electro Punk products pull no punches with their outrageous black-and-pink cyberpunk theme. Mix and match your weapons to suit your style: team the sizzling ROG Strix G15 gaming laptop with the bold ROG Strix Go 2.4 headset and awesome ROG Sheath mousepad, or treat your desktop rig to the mind-blowing ROG Strix Scope TKL keyboard and uber-cool ROG Strix Impact II mouse. And remember: whatever you choose, it\'s nobody\'s business except yours','$230.00',6,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMqmC1f6YhEzyilsT1n9KvOc85ftLPjM2v8aWDJ2U3kHnWjmpXHw2mF-RK8GKCqRpqhJQ-fzPCiotQgJ45voKVuZu1lD6vmp6Hxjo-TKhRMIZBwn6f3j16fz7wBGVk');
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `items` varchar(500) NOT NULL,
  `itemQuantities` varchar(500) NOT NULL,
  `isComplete` int(11) NOT NULL,
  `itemCosts` varchar(500) NOT NULL,
  PRIMARY KEY (`orderID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sessionID` int(11) NOT NULL,
  `expires` int(12) NOT NULL,
  `data` varchar(128) NOT NULL,
  PRIMARY KEY (`sessionID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(128) NOT NULL,
  `isAdmin` int(11) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2b$10$vqH7k0FrZiC2n651p7xLtuvTUUiA64JBe7oFIs',1),(2,'user','$2a$10$LL/JPlj7FaCxzrnT6f310uNHf5ajEu3QyPA5DziVZDSQQpTGxR3AG',0),(0,'','',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-08 17:17:10
