"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"moonraker-config-changes","metadata":{"permalink":"/blog/moonraker-config-changes","editUrl":"https://github.com/Rat-OS/RatOS/edit/master/site/blog/2022-10-17-moonraker-config-changes.mdx","source":"@site/blog/2022-10-17-moonraker-config-changes.mdx","title":"Moonraker is now safe to update","description":"Major moonraker config and file changes","date":"2022-10-17T00:00:00.000Z","formattedDate":"October 17, 2022","tags":[{"label":"RatOS","permalink":"/blog/tags/rat-os"},{"label":"Releases","permalink":"/blog/tags/releases"}],"readingTime":1.915,"truncated":false,"authors":[{"name":"Mikkel Schmidt","title":"Creator of RatOS","url":"https://github.com/miklschmidt","imageURL":"https://github.com/miklschmidt.png","key":"miklschmidt"}],"frontMatter":{"slug":"moonraker-config-changes","title":"Moonraker is now safe to update","authors":["miklschmidt"],"tags":["RatOS","Releases"]},"nextItem":{"title":"RatOS V1.1 Released!","permalink":"/blog/ratos-v1-1-released"}},"content":"## Major moonraker config and file changes\\n\\nAs you might know, a couple of weeks ago, I issued a warning about updating moonraker due to a major change that involved file restructuring, config changes and deprecations. I now believe i\'ve ironed out all the kinks, and I can now say that the update is safe to do, as long as you update RatOS first, as usual.\\n\\n**There are a few things to note about this update:**\\n\\nUsers who installed RatOS before 1.2.1 have an unmanaged moonraker config, this means that it\'s up to the user to manage it and RatOS can\'t correct it when things need updating. Fear not though, as most of this is automated by moonraker itself. When you update moonraker, make sure to keep an eye on the notifications in the topmenu, there\'s a chance you might have to follow the instructions in there to finish the config validation. It should be straight forward though.\\n\\n## Checking if your moonraker config is managed\\nTo check if you have a managed config (and thus don\'t need to do anything besides clicking the update buttons), you can look in your moonraker.conf for `[include config/moonraker.conf]`, if that is present, you have a managed moonraker config. If it\'s not, you have an unmanaged config, and you\'ll have to follow the instructions in the notification, if any is present.\\n\\n## Updating to a managed config\\nFor those who wish to update their moonraker configuration to be managed by RatOS you can do so by making sure RatOS is updated and then replace the contents of moonraker.conf with the following:\\n\\n```properties\\n# Load the RatOS moonraker defaults\\n[include config/moonraker.conf]\\n\\n# If you use a non standard ip range in your local network, \\n# you can specify it under trusted_clients here.\\n[authorization]\\ncors_domains:\\n    http://app.fluidd.xyz\\n    https://app.fluidd.xyz\\n    https://my.mainsail.xyz\\n    http://my.mainsail.xyz\\n    http://*.local\\n    http://*.lan\\ntrusted_clients:\\n    127.0.0.1\\n    10.0.0.0/8\\n    127.0.0.0/8\\n    169.254.0.0/16\\n    172.16.0.0/12\\n    192.168.0.0/16\\n    FE80::/10\\n    ::1/128\\n    FD00::/8\\n```\\n\\nAny changes you\'ve made or want to make to the moonraker config, goes after this. The moonraker config works just like the klipper config, so you can override sections and parameters just like you\'re used to, they just need to come after the `[include]` statement. See [Includes and Overides](/docs/configuration/includes-and-overrides) for more information on how the config merging works.\\n\\nThank you for bearing with me, and happy printing!"},{"id":"ratos-v1-1-released","metadata":{"permalink":"/blog/ratos-v1-1-released","editUrl":"https://github.com/Rat-OS/RatOS/edit/master/site/blog/2022-01-08-ratos-v1-1-released.mdx","source":"@site/blog/2022-01-08-ratos-v1-1-released.mdx","title":"RatOS V1.1 Released!","description":"RatOS V1.1 is now released!","date":"2022-01-08T00:00:00.000Z","formattedDate":"January 8, 2022","tags":[{"label":"RatOS","permalink":"/blog/tags/rat-os"},{"label":"Releases","permalink":"/blog/tags/releases"}],"readingTime":1.445,"truncated":false,"authors":[{"name":"Mikkel Schmidt","title":"Creator of RatOS","url":"https://github.com/miklschmidt","imageURL":"https://github.com/miklschmidt.png","key":"miklschmidt"}],"frontMatter":{"slug":"ratos-v1-1-released","title":"RatOS V1.1 Released!","authors":["miklschmidt"],"tags":["RatOS","Releases"]},"prevItem":{"title":"Moonraker is now safe to update","permalink":"/blog/moonraker-config-changes"},"nextItem":{"title":"RatOS V1.0 Released!","permalink":"/blog/ratos-v1-0-released"}},"content":"## RatOS V1.1 is now released!\\n\\n![RatOS](/img/logos/Type.png)\\n\\nAs some of you may have noticed, RatOS v1.1 has been released this week, bringing new templates, new modular driver and stepper definitions and\\nsupport for new extruders and hotends. This release also contains an updated V-Minion template that will run out of the box with the just released [V-Minion full kits](https://www.ratrig.com/v-minion.html) that will start shipping soon.\\n\\n### Changes to stepper motors and driver settings.\\n\\nThis release mainly revolves around the new stepper/stepper driver setting recommendations from Klipper. `Hold_current` has been removed, stealthchop is now entirely disabled by default, interpolation has been disabled and microsteps have been increased to 64 to counteract the additional noise. This increases precision and you may see an increase in print quality.\\nThis change comes with the side effect of increased \\"R2D2 noise\\", tuned driver settings for the most used steppers have been included to combat this, but they will never be as silent in standstill as with stealthchop_threshold: 1. If you want a quieter printer refer to the \\"stealth mode\\" includes in the new printer templates, this will turn on stealthchop and limit print velocity at the cost of significantly reduced torque and precision.\\nA nice consequence of this change is that it made it easier to make drivers and steppers more modular, it\'s now much easier to run high voltage steppers on some stepper slots, read more in the [Advanced Stepper Configuration](/docs/configuration/advanced-stepper-configuration) guide.\\n\\n### Updating from RatOS v1.0\\n\\nV1.1 is backwards compatible, but there are still a couple of things you might want to do, read more in the [Update Guide](/changelog#updating-from-ratos-v10).\\n\\n### THANK YOU for your support\\n\\nThank you to everyone who donated, helped me test and suggest changes and improvements, it is much appreciated!"},{"id":"ratos-v1-0-released","metadata":{"permalink":"/blog/ratos-v1-0-released","editUrl":"https://github.com/Rat-OS/RatOS/edit/master/site/blog/2021-11-14-ratos-v1-0-released.mdx","source":"@site/blog/2021-11-14-ratos-v1-0-released.mdx","title":"RatOS V1.0 Released!","description":"RatOS V1.0 is here!","date":"2021-11-14T00:00:00.000Z","formattedDate":"November 14, 2021","tags":[{"label":"RatOS","permalink":"/blog/tags/rat-os"},{"label":"Releases","permalink":"/blog/tags/releases"}],"readingTime":2.31,"truncated":false,"authors":[{"name":"Mikkel Schmidt","title":"Creator of RatOS","url":"https://github.com/miklschmidt","imageURL":"https://github.com/miklschmidt.png","key":"miklschmidt"}],"frontMatter":{"slug":"ratos-v1-0-released","title":"RatOS V1.0 Released!","authors":["miklschmidt"],"tags":["RatOS","Releases"]},"prevItem":{"title":"RatOS V1.1 Released!","permalink":"/blog/ratos-v1-1-released"}},"content":"## RatOS V1.0 is here!\\n\\n![RatOS](/img/logos/Logo-white.svg)\\n\\nRatOS V1.0 is finally released, it\'s been a long road to get here, thank you everyone who has been testing and supporting me get this release completed.\\nThere\'s a lot of new exciting features that i\'m dying to share with you all.\\n\\n### Mainsail is here!\\n\\nRatOS now ships with Mainsail as the default UI. The Mainsail team has been teasing a lot of awesome features lately and now RatOS users get them too.\\n\\n### Automated firmware updates\\n\\nThat\'s right. RatOS will now flash your board for you everytime klipper is updated.\\nThis has been a high priority for me, since much of my time has been spent answering questions about the infamous version mismatch error.\\nIt hasn\'t been very clear to beginners, what they need to do to get things working again, after having updated klipper and getting presented with an error.\\nThis is now a thing of the past!\\n\\nUnfortunately there\'s an exception for the Octopus Pro 429, since there\'s currently no way to flash that board automatically.\\nRead more about that in the [Octopus Pro 429 Board Documentation](/docs/boards/btt/octopus-pro-429#firmware-installation)\\n\\n### RPi as additional MCU.\\n\\nAutomated firmware updates made it possible to add the RPi as an additional mcu, it\'s now preconfigured and automatically updated, so you can use\\nit for additional GPIO\'s, ADXL345 or other sensors if you need to. This also opens up for using dual ADXL345\'s on bed slingers.\\n\\n### More powerful macros\\n\\nRatOS now ships with the gcode_shell_command.py klipper extension, this allows for macros to compile binaries, pick your printer configuration, generate input shaper graphs and more without you ever having to SSH into your pi. It\'s been the primary design principle of RatOS from the start that running klipper on your printer should not require knowledge of SSH or Linux, so this is another step in the right direction!\\n\\n### More flexible macros\\n\\nWe\'ve added a bunch of parameters you can configure for changing the behavior of the built-in RatOS macro\'s, want your START_PRINT to skip the bed mesh calibration? No problem. Want the carriage to park in the front during pauses? Easy! How about starting your print with a primeline? You\'ve got it! Read more in the [Macro Configuration documentation](/docs/configuration/macros)\\n\\n### Updating from V-CoreOS RC 2\\n\\nIf you\'re using V-CoreOS RC 2, take a look at the [Update Guide](/changelog#updating-from-v-coreos-rc2) for a smooth transition.\\n\\n### THANK YOU for your support\\n\\nThe amount of support and encouragement i\'ve recieved from the community has been heartwarming, and totally makes the long nights worth it!\\nThank you for helping and thank you for using RatOS!\\n\\nIf you wish to donate towards a new spool of filament or a cup of coffee you can do so here: [github.com/sponsors/miklschmidt](https://github.com/sponsors/miklschmidt) or [paypal.me/miklschmidt](https://paypal.me/miklschmidt). Thank you very much!"}]}')}}]);