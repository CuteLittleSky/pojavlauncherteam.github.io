const { description } = require('../package')
const vuepressBar = require('vuepress-bar');

const { sidebar } = vuepressBar({
  addReadMeToFirstGroup: false,
});

module.exports = {
    title: 'PojavLauncher 中文文档',
	description: '一个快速,便携且开源的手机Minecraft Java版启动器',
    head: [
		['meta', {
			name: 'theme-color',
			content: '#ffffff',
			media: '(prefers-color-scheme: light)'
		}],
		['meta', {
			name: 'theme-color',
			content: '#25262b',
			media: '(prefers-color-scheme: dark)'
		}],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/',
    dest: './docs',

	watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },

	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/CuteLittleSky/PojavLauncherTeam.github.io/',
		docsDir: '',
		docsBranch: 'main',
		editLinks: true,
		editLinkText: '帮助我们完善此文档',
        logo: 'logo.png',

        sidebar: [
        {
            title: 'Wiki', // Category for information
            collapsable: false,
            
            children: [
				{
					title: '开始', // Subcategory for starting off
					collapsable: false, // Don't allow collapsing
					sidebarDepth: 1,
					children: [
					    'INSTALL', // Installing PojavLauncher
                        'BUILD-FROM-SOURCE', // Building PojavLauncher from source
						'SIGN-IN', // Signing in
						'INSTALL-MC', // Downloading Minecraft
						'DEFAULT-CONTROLS', // Taking a look at the controls
					]
				},
				{
					title: '常见问题', // Subcategory for FAQ
					collapsable: true, 
					sidebarDepth: 1,
					children: [
						{
							title: 'iOS问题', // Subcategory for iOS FAQ
							collapsable: true, // Don't allow collapsing
							sidebarDepth: 1,
							children: [
								'JETSAM', // Dealing with iOS memory limits
								'JIT', // iOS and "JIT"
							]
						},
						{
							title: 'Android问题', // Subcategory for Android FAQ
							collapsable: true, // Don't allow collapsing
							sidebarDepth: 1,
							children: [
								'PARSINGERROR', // "Error while parsing the package" error fix
								'REFUSALOFINSTALL', // "App not installed" error fix (very uncommon)
								'32BIT', // Platform and performance limitations (32bit)
							]
						},
						// FAQ that applies to both platforms goes here
					]
		
				},
				{
					title: '进阶', // Subcategory for getting deeper in the launcher
					collapsable: true, 
					sidebarDepth: 1,
					children: [
						'CUSTOM-MC', // Installing custom versions of Minecraft
						'CUSTOM-CONTROLS', // Customizing the on-screen controls
						'OPTIMIZATION', // Optimizing the game
						'ENV-VARS', // Using environment variables
						'JAVA-ARGS', // Adding custom Java arguments
						'DEBUG-LOG', // Debugging issues with the launcher
					]
		
				},
				
            ]

        },
        {
            title: '关于PojavLauncher', // Category about the project
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'LEGAL', // Legal + Security
				'DEVICES', // Supported Devices
				'MCVERS', // Supported Minecraft Versions
				'MODS-UNSUPPORTED', // Unsupported Mods
				'ROADMAP', // The road ahead for PojavLauncher
            ]

        },
		{
            title: '做出贡献', // Category about contributing
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'CONT-POJAV', // Contributing to PojavLauncher itself
				'CONT-WEBSITE', // Contributing to this website
                'CONT-TRANSLATIONS', //Contributing to PojavLauncher translations, hopefully website translations later on
            ]

        },
        {
            title: '近期更新', // Category about recent developments
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'UNJAIL', // Bringing PojavLauncher to unjailbroken iOS
				'IOS-SUPPORT', // System support in future versions of PojavLauncher iOS
				'LOCAL-MODE', // Offline mode is going places
            ]

        },
        ],
    },
    plugins: [
		['vuepress-plugin-code-copy', true],
		['flexsearch'],
                ['code-switcher'],
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
        {
        	selector: "img",
        	options: {
            	background: 'var(--bodyBgColor)'
            }
        }],
    ]
}
