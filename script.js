    // Particle animation
    (function initParticles() {
      const canvas = document.getElementById('particles');
      const ctx = canvas.getContext('2d');
      let particles = [];
      let mouseX = 0;
      let mouseY = 0;
      let animationId;

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      function createParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(74, 222, 128, ${Math.random() * 0.3 + 0.1})`
          });
        }
      }

      function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          for (let j = index + 1; j < particles.length; j++) {
            const dx = particle.x - particles[j].x;
            const dy = particle.y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(74, 222, 128, ${0.15 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        });
      }

      function animate() {
        drawParticles();
        animationId = requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
        resize();
        createParticles();
      });

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      resize();
      createParticles();
      animate();
    })();

    // Data
    const dimensionMeta = {
      FUN: { name: 'FUN 搞笑指数', model: '快乐模型' },
      WEIRD: { name: 'WEIRD 奇葩指数', model: '个性模型' },
      LAZY: { name: 'LAZY 懒惰指数', model: '生活模型' },
      CRAZY: { name: 'CRAZY 疯狂指数', model: '行为模型' },
      CHILL: { name: 'CHILL 淡定指数', model: '心态模型' }
    };

    const TYPE_IMAGES = {
      "FOODIE": "image/FOODIE.jpg",
      "WEIRDO": "image/WEIRDO.jpg",
      "LAZYBONE": "image/LAZYBONE.jpg",
      "CRAZYPANTS": "image/CRAZYPANTS.jpg",
      "CHILLMASTER": "image/CHILLMASTER.jpg",
      "GAMER": "image/GAMER.jpg",
      "ADVENTURER": "image/ADVENTURER.jpg",
      "INFLUENCER": "image/INFLUENCER.jpg",
      "NERD": "image/NERD.jpg",
      "FUNNY": "image/FUNNY.jpg"
    };

    const NORMAL_TYPES = [
      {
        "code": "FUNNY",
        "pattern": "HHHH"
      },
      {
        "code": "WEIRDO",
        "pattern": "HHHH"
      },
      {
        "code": "LAZYBONE",
        "pattern": "HHHH"
      },
      {
        "code": "CRAZYPANTS",
        "pattern": "HHHH"
      },
      {
        "code": "CHILLMASTER",
        "pattern": "HHHH"
      },
      {
        "code": "CTRL",
        "pattern": "HHHH"
      }
    ];

    // 问题数据
    const questions = [
      {
        id: 1,
        text: "当你看到有人在公共场合摔倒，你的第一反应是：",
        options: [
          { value: "FUN_H", text: "立刻掏出手机拍照发朋友圈" },
          { value: "WEIRD_H", text: "过去问他需不需要帮他画个摔倒的素描" },
          { value: "LAZY_H", text: "假装没看见，继续走自己的路" },
          { value: "CRAZY_H", text: "冲过去和他一起摔倒，比谁摔得更惨" },
          { value: "CHILL_H", text: "平静地过去扶他起来" }
        ]
      },
      {
        id: 2,
        text: "如果你的朋友失恋了，你会：",
        options: [
          { value: "FUN_H", text: "带他去蹦迪，说‘下一个更乖’" },
          { value: "WEIRD_H", text: "给他写一首关于失恋的打油诗" },
          { value: "LAZY_H", text: "陪他在家躺着看电影，什么都不说" },
          { value: "CRAZY_H", text: "带他去前任家门口唱《分手快乐》" },
          { value: "CHILL_H", text: "认真听他倾诉，给予安慰" }
        ]
      },
      {
        id: 3,
        text: "周末你最想做的事情是：",
        options: [
          { value: "FUN_H", text: "和朋友去剧本杀或密室逃脱" },
          { value: "WEIRD_H", text: "在家研究奇怪的菜谱，比如巧克力炒鸡蛋" },
          { value: "LAZY_H", text: "睡一整天，不起床" },
          { value: "CRAZY_H", text: "去蹦极或跳伞，挑战极限" },
          { value: "CHILL_H", text: "去公园散步，晒晒太阳" }
        ]
      },
      {
        id: 4,
        text: "当你遇到困难时，你会：",
        options: [
          { value: "FUN_H", text: "用幽默化解，说‘这算什么，我见过更糟的’" },
          { value: "WEIRD_H", text: "尝试用奇怪的方法解决，比如用塔罗牌算解决方案" },
          { value: "LAZY_H", text: "拖延，等问题自己消失" },
          { value: "CRAZY_H", text: "直接冲上去硬刚，不管后果" },
          { value: "CHILL_H", text: "冷静分析，制定计划" }
        ]
      },
      {
        id: 5,
        text: "你最喜欢的电影类型是：",
        options: [
          { value: "FUN_H", text: "喜剧片，能让我笑到肚子痛" },
          { value: "WEIRD_H", text: "科幻片，越奇怪越好" },
          { value: "LAZY_H", text: "轻松的爱情片，不用动脑" },
          { value: "CRAZY_H", text: "动作片，越刺激越好" },
          { value: "CHILL_H", text: "文艺片，能让我思考" }
        ]
      },
      {
        id: 6,
        text: "如果可以拥有一种超能力，你会选择：",
        options: [
          { value: "FUN_H", text: "能让所有人都笑的能力" },
          { value: "WEIRD_H", text: "能和动物对话的能力" },
          { value: "LAZY_H", text: "瞬间移动，不用走路" },
          { value: "CRAZY_H", text: "力大无穷，能举起重物" },
          { value: "CHILL_H", text: "读心术，能了解别人的想法" }
        ]
      },
      {
        id: 7,
        text: "你平时的穿着风格是：",
        options: [
          { value: "FUN_H", text: "鲜艳的颜色，夸张的图案" },
          { value: "WEIRD_H", text: "混搭风格，别人看不懂" },
          { value: "LAZY_H", text: "舒适为主，怎么方便怎么穿" },
          { value: "CRAZY_H", text: "朋克风格，有很多金属装饰" },
          { value: "CHILL_H", text: "简约风格，干净整洁" }
        ]
      },
      {
        id: 8,
        text: "当你和朋友吵架时，你会：",
        options: [
          { value: "FUN_H", text: "讲笑话缓和气氛" },
          { value: "WEIRD_H", text: "写一封奇怪的道歉信" },
          { value: "LAZY_H", text: "冷战，等对方先道歉" },
          { value: "CRAZY_H", text: "大吵一架，把话说清楚" },
          { value: "CHILL_H", text: "冷静沟通，找出问题所在" }
        ]
      },
      {
        id: 9,
        text: "你最喜欢的食物是：",
        options: [
          { value: "FUN_H", text: "火锅，热闹又好吃" },
          { value: "WEIRD_H", text: "奇怪的组合，比如巧克力蘸咸菜" },
          { value: "LAZY_H", text: "外卖，不用自己做" },
          { value: "CRAZY_H", text: "超辣的食物，挑战味蕾" },
          { value: "CHILL_H", text: "家常菜，温馨又健康" }
        ]
      },
      {
        id: 10,
        text: "如果让你选择一个地方旅游，你会去：",
        options: [
          { value: "FUN_H", text: "迪士尼乐园，充满欢乐" },
          { value: "WEIRD_H", text: "冰岛，看极光和火山" },
          { value: "LAZY_H", text: "海滩，躺着晒太阳" },
          { value: "CRAZY_H", text: "沙漠，挑战极限生存" },
          { value: "CHILL_H", text: "古镇，感受历史文化" }
        ]
      },
      {
        id: 11,
        text: "当你收到一个不喜欢的礼物时，你会：",
        options: [
          { value: "FUN_H", text: "假装很喜欢，然后悄悄转送别人" },
          { value: "WEIRD_H", text: "研究这个礼物的奇怪用途" },
          { value: "LAZY_H", text: "随便放一边，不管它" },
          { value: "CRAZY_H", text: "直接告诉对方不喜欢" },
          { value: "CHILL_H", text: "感谢对方的心意，然后收起来" }
        ]
      },
      {
        id: 12,
        text: "你平时的娱乐方式是：",
        options: [
          { value: "FUN_H", text: "和朋友聚会，玩游戏" },
          { value: "WEIRD_H", text: "收集奇怪的东西，比如瓶盖" },
          { value: "LAZY_H", text: "刷手机，看视频" },
          { value: "CRAZY_H", text: "玩极限运动，比如滑板" },
          { value: "CHILL_H", text: "读书，听音乐" }
        ]
      },
      {
        id: 13,
        text: "当你看到有人插队时，你会：",
        options: [
          { value: "FUN_H", text: "幽默地提醒他‘兄弟，队伍在那边’" },
          { value: "WEIRD_H", text: "跟着他一起插队，看他反应" },
          { value: "LAZY_H", text: "算了，多一事不如少一事" },
          { value: "CRAZY_H", text: "直接指责他，让他排队" },
          { value: "CHILL_H", text: "礼貌地提醒他排队" }
        ]
      },
      {
        id: 14,
        text: "你最喜欢的季节是：",
        options: [
          { value: "FUN_H", text: "春天，万物复苏，充满希望" },
          { value: "WEIRD_H", text: "秋天，落叶纷飞，很有诗意" },
          { value: "LAZY_H", text: "冬天，能窝在被子里" },
          { value: "CRAZY_H", text: "夏天，能去游泳和烧烤" },
          { value: "CHILL_H", text: "四季都喜欢，各有各的美" }
        ]
      },
      {
        id: 15,
        text: "当你需要做一个重要决定时，你会：",
        options: [
          { value: "FUN_H", text: "抛硬币，听天由命" },
          { value: "WEIRD_H", text: "算卦，看运势" },
          { value: "LAZY_H", text: "拖到最后一刻再决定" },
          { value: "CRAZY_H", text: "凭直觉，立刻决定" },
          { value: "CHILL_H", text: "深思熟虑，权衡利弊" }
        ]
      },
      {
        id: 16,
        text: "你最喜欢的动物是：",
        options: [
          { value: "FUN_H", text: "狗，活泼又忠诚" },
          { value: "WEIRD_H", text: "蛇，神秘又独特" },
          { value: "LAZY_H", text: "猫，慵懒又可爱" },
          { value: "CRAZY_H", text: "狮子，威风又霸气" },
          { value: "CHILL_H", text: "兔子，温顺又乖巧" }
        ]
      },
      {
        id: 17,
        text: "当你被朋友捉弄时，你会：",
        options: [
          { value: "FUN_H", text: "反过来捉弄他，以牙还牙" },
          { value: "WEIRD_H", text: "假装生气，然后突然笑出来" },
          { value: "LAZY_H", text: "无所谓，随便他" },
          { value: "CRAZY_H", text: "生气，要他道歉" },
          { value: "CHILL_H", text: "笑一笑，不放在心上" }
        ]
      },
      {
        id: 18,
        text: "你平时的学习/工作风格是：",
        options: [
          { value: "FUN_H", text: "边学边玩，劳逸结合" },
          { value: "WEIRD_H", text: "用奇怪的方法学习，比如边听重金属边背书" },
          { value: "LAZY_H", text: "拖延到最后，然后熬夜完成" },
          { value: "CRAZY_H", text: "集中精力，一口气完成" },
          { value: "CHILL_H", text: "有计划地学习，按时完成" }
        ]
      },
      {
        id: 19,
        text: "当你看到一个陌生人需要帮助时，你会：",
        options: [
          { value: "FUN_H", text: "边帮忙边开玩笑，让气氛轻松" },
          { value: "WEIRD_H", text: "用奇怪的方式帮忙，比如用魔术变出他需要的东西" },
          { value: "LAZY_H", text: "看看有没有别人会帮忙" },
          { value: "CRAZY_H", text: "毫不犹豫地冲上去帮忙" },
          { value: "CHILL_H", text: "礼貌地询问他需要什么帮助" }
        ]
      },
      {
        id: 20,
        text: "如果你的人生可以重来，你会：",
        options: [
          { value: "FUN_H", text: "尝试更多新鲜事物，让生活更有趣" },
          { value: "WEIRD_H", text: "做一个完全不同的人，体验不同的人生" },
          { value: "LAZY_H", text: "还是过现在的生活，挺舒服的" },
          { value: "CRAZY_H", text: "挑战更多极限，做更疯狂的事情" },
          { value: "CHILL_H", text: "珍惜现在的一切，过好每一天" }
        ]
      }
    ];

    // 结果数据
    const results = {
      "FOODIE": {
        name: "FOODIE（吃货）",
        sub: "民以食为天，吃就是你的人生哲学",
        desc: "你是一个不折不扣的吃货，对美食有着无限的热情。你认为人生最大的幸福就是吃到好吃的东西，为了美食可以跋山涉水。你善于发现各种好吃的地方，是朋友们的美食指南。在你看来，没有什么问题是一顿美食解决不了的，如果有，那就两顿。",
        dims: [
          { name: "FUN", score: 85, desc: "你用美食带给自己和朋友快乐" },
          { name: "WEIRD", score: 60, desc: "为了吃你可能会尝试一些奇怪的组合" },
          { name: "LAZY", score: 70, desc: "有时候为了吃也会变得很懒" },
          { name: "CRAZY", score: 50, desc: "在美食面前你会变得很疯狂" },
          { name: "CHILL", score: 65, desc: "享受美食时你会变得很淡定" }
        ],
        funNote: "小心吃成胖子哦！不过就算胖了也没关系，能吃是福嘛！"
      },
      "WEIRDO": {
        name: "WEIRDO（奇葩）",
        sub: "你的思维与众不同，是人群中的独特存在",
        desc: "你是一个思维独特的人，总是有一些奇怪的想法和创意。你不喜欢随波逐流，喜欢做一些别人不理解的事情。在别人看来你可能有点奇怪，但你自己知道，你只是比别人更有创意而已。你的存在让这个世界变得更加有趣。",
        dims: [
          { name: "FUN", score: 70, desc: "你的奇怪想法常常会逗笑别人" },
          { name: "WEIRD", score: 95, desc: "你是真正的奇葩，思维与众不同" },
          { name: "LAZY", score: 50, desc: "有时候你也会犯懒" },
          { name: "CRAZY", score: 75, desc: "你的行为有时候会让人觉得疯狂" },
          { name: "CHILL", score: 60, desc: "你对别人的看法很淡定" }
        ],
        funNote: "保持你的独特性，这个世界需要更多像你这样的奇葩！"
      },
      "LAZYBONE": {
        name: "LAZYBONE（懒骨头）",
        sub: "能躺着绝不坐着，能坐着绝不站着",
        desc: "你是一个不折不扣的懒骨头，最喜欢的事情就是躺着不动。你觉得人生苦短，何必那么辛苦，能偷懒就偷懒。虽然有时候会因为懒惰误事，但你总是能找到借口原谅自己。你的人生哲学是：能躺着绝不坐着，能坐着绝不站着。",
        dims: [
          { name: "FUN", score: 60, desc: "偷懒的时候你也会找乐子" },
          { name: "WEIRD", score: 40, desc: "你的懒惰方式可能有点奇怪" },
          { name: "LAZY", score: 95, desc: "你是真正的懒骨头，能偷懒就偷懒" },
          { name: "CRAZY", score: 30, desc: "你懒到连疯狂的事情都不想做" },
          { name: "CHILL", score: 80, desc: "你对一切都很淡定，因为懒" }
        ],
        funNote: "适当的懒惰是生活的调味剂，但不要太过分哦！"
      },
      "CRAZYPANTS": {
        name: "CRAZYPANTS（疯裤子）",
        sub: "你的人生就是一场冒险，永远充满激情",
        desc: "你是一个充满激情和活力的人，总是喜欢尝试新鲜事物，挑战极限。你觉得人生就应该充满刺激和冒险，否则就太无聊了。在别人看来你可能有点疯狂，但你自己知道，你只是在充分享受人生而已。你的存在让周围的人都变得更有活力。",
        dims: [
          { name: "FUN", score: 85, desc: "你的疯狂行为常常会带来快乐" },
          { name: "WEIRD", score: 70, desc: "你的行为有时候会很奇怪" },
          { name: "LAZY", score: 20, desc: "你懒不起来，总是充满活力" },
          { name: "CRAZY", score: 95, desc: "你是真正的疯子，喜欢挑战极限" },
          { name: "CHILL", score: 40, desc: "你总是很激动，很难淡定" }
        ],
        funNote: "保持你的激情，但也要注意安全哦！"
      },
      "CHILLMASTER": {
        name: "CHILLMASTER（淡定大师）",
        sub: "无论发生什么，你都能保持淡定",
        desc: "你是一个非常淡定的人，无论遇到什么事情都能保持冷静。你觉得焦虑和紧张解决不了问题，不如以平和的心态面对一切。在别人看来你可能有点冷漠，但你自己知道，你只是比别人更成熟而已。你的存在让周围的人都变得更冷静。",
        dims: [
          { name: "FUN", score: 50, desc: "你享受平静的快乐" },
          { name: "WEIRD", score: 30, desc: "你是一个正常的人" },
          { name: "LAZY", score: 60, desc: "你有时候也会犯懒" },
          { name: "CRAZY", score: 20, desc: "你很少做疯狂的事情" },
          { name: "CHILL", score: 95, desc: "你是真正的淡定大师" }
        ],
        funNote: "你的淡定是一种境界，但有时候也要适当表达自己的情绪哦！"
      },
      "GAMER": {
        name: "GAMER（游戏玩家）",
        sub: "游戏是你的第二人生",
        desc: "你是一个热爱游戏的人，游戏对你来说不仅仅是一种娱乐，更是一种生活方式。你在游戏中找到了快乐和成就感，也结交了很多朋友。虽然有时候会因为游戏忽略现实生活，但你知道，游戏也是生活的一部分。",
        dims: [
          { name: "FUN", score: 80, desc: "游戏带给你很多快乐" },
          { name: "WEIRD", score: 60, desc: "你可能会有一些游戏相关的奇怪习惯" },
          { name: "LAZY", score: 70, desc: "玩游戏的时候你会变得很懒" },
          { name: "CRAZY", score: 65, desc: "为了游戏你可能会做出一些疯狂的事情" },
          { name: "CHILL", score: 50, desc: "游戏时你会很专注，很淡定" }
        ],
        funNote: "游戏虽好，但也要注意平衡现实生活哦！"
      },
      "ADVENTURER": {
        name: "ADVENTURER（冒险家）",
        sub: "你的人生就是一场冒险",
        desc: "你是一个喜欢冒险的人，总是想要探索未知的世界。你觉得人生就应该充满挑战和惊喜，否则就太无聊了。你喜欢旅行，喜欢尝试新鲜事物，喜欢挑战自己的极限。你的存在让周围的人都变得更有勇气。",
        dims: [
          { name: "FUN", score: 85, desc: "冒险带给你很多快乐" },
          { name: "WEIRD", score: 65, desc: "你的冒险方式可能有点奇怪" },
          { name: "LAZY", score: 30, desc: "你懒不起来，总是想要冒险" },
          { name: "CRAZY", score: 80, desc: "冒险本身就是一种疯狂" },
          { name: "CHILL", score: 60, desc: "冒险时你会保持冷静" }
        ],
        funNote: "冒险很刺激，但也要注意安全哦！"
      },
      "INFLUENCER": {
        name: "INFLUENCER（影响者）",
        sub: "你是人群中的焦点，善于影响他人",
        desc: "你是一个很有影响力的人，总是能够吸引别人的注意力。你善于表达自己的想法，善于说服别人，善于领导团队。你觉得人生就应该有所作为，有所影响。你的存在让周围的人都变得更有动力。",
        dims: [
          { name: "FUN", score: 75, desc: "你善于制造快乐" },
          { name: "WEIRD", score: 50, desc: "你是一个正常的人" },
          { name: "LAZY", score: 40, desc: "你很有上进心，不怎么懒" },
          { name: "CRAZY", score: 60, desc: "为了影响力你可能会做出一些疯狂的事情" },
          { name: "CHILL", score: 65, desc: "你在公众面前会保持淡定" }
        ],
        funNote: "你的影响力是一种力量，要善用哦！"
      },
      "NERD": {
        name: "NERD（书呆子）",
        sub: "知识就是力量，学习使你快乐",
        desc: "你是一个热爱学习的人，对知识有着无限的渴望。你喜欢读书，喜欢思考，喜欢探索未知的领域。在别人看来你可能有点书呆子，但你自己知道，你只是比别人更热爱学习而已。你的存在让周围的人都变得更有知识。",
        dims: [
          { name: "FUN", score: 60, desc: "学习对你来说是一种快乐" },
          { name: "WEIRD", score: 65, desc: "你的学习方式可能有点奇怪" },
          { name: "LAZY", score: 50, desc: "你有时候也会犯懒" },
          { name: "CRAZY", score: 40, desc: "你很少做疯狂的事情" },
          { name: "CHILL", score: 75, desc: "学习时你会很淡定" }
        ],
        funNote: "知识就是力量，但也要适当放松哦！"
      },
      "FUNNY": {
        name: "FUNNY（搞笑达人）",
        sub: "你是天生的喜剧演员，走到哪里哪里就有笑声",
        desc: "你是一个天生的搞笑达人，总是能够逗笑别人。你善于讲笑话，善于制造幽默，善于化解尴尬的气氛。你觉得人生就应该充满快乐，所以你总是尽力让周围的人都开心。你的存在让周围的人都变得更快乐。",
        dims: [
          { name: "FUN", score: 95, desc: "你是真正的搞笑达人" },
          { name: "WEIRD", score: 50, desc: "你的幽默可能有点奇怪" },
          { name: "LAZY", score: 60, desc: "你有时候也会犯懒" },
          { name: "CRAZY", score: 65, desc: "为了搞笑你可能会做出一些疯狂的事情" },
          { name: "CHILL", score: 55, desc: "你在搞笑时会很淡定" }
        ],
        funNote: "你的幽默是一种天赋，要珍惜哦！"
      }
    };

    // DOM elements
    const elements = {
      loading: document.getElementById('loadingOverlay'),
      intro: document.getElementById('intro'),
      test: document.getElementById('test'),
      result: document.getElementById('result'),
      questionList: document.getElementById('questionList'),
      progressBar: document.getElementById('progressBar'),
      progressText: document.getElementById('progressText'),
      prevBtn: document.getElementById('prevBtn'),
      nextBtn: document.getElementById('nextBtn'),
      backIntroBtn: document.getElementById('backIntroBtn'),
      restartBtn: document.getElementById('restartBtn'),
      toTopBtn: document.getElementById('toTopBtn'),
      startBtn: document.getElementById('startBtn'),
      posterImage: document.getElementById('posterImage'),
      posterCaption: document.getElementById('posterCaption'),
      posterBox: document.getElementById('posterBox'),
      resultModeKicker: document.getElementById('resultModeKicker'),
      resultTypeName: document.getElementById('resultTypeName'),
      matchBadge: document.getElementById('matchBadge'),
      resultTypeSub: document.getElementById('resultTypeSub'),
      resultDesc: document.getElementById('resultDesc'),
      dimList: document.getElementById('dimList'),
      funNote: document.getElementById('funNote')
    };

    // State
    let currentQuestion = 0;
    let answers = [];

    // Show loading
    function showLoading() {
      elements.loading.classList.add('active');
    }

    // Hide loading
    function hideLoading() {
      elements.loading.classList.remove('active');
    }

    // Switch screen
    function switchScreen(toScreen) {
      elements.intro.classList.remove('active');
      elements.test.classList.remove('active');
      elements.result.classList.remove('active');
      document.querySelector(`#${toScreen}`).classList.add('active');
    }

    // Render question
    function renderQuestion(index) {
      const q = questions[index];
      elements.questionList.innerHTML = `
        <div class="question">
          <div class="question-meta">
            <span class="badge">第 ${q.id} 题</span>
            <span>${q.id} / ${questions.length}</span>
          </div>
          <div class="question-title">${q.text}</div>
          <div class="options">
            ${q.options.map((opt, i) => `
              <label class="option">
                <input type="radio" name="q${q.id}" value="${opt.value}" ${answers[index] === opt.value ? 'checked' : ''} onchange="handleOptionChange(${index}, '${opt.value}')">
                <div class="option-code">${String.fromCharCode(65 + i)}</div>
                <div>${opt.text}</div>
              </label>
            `).join('')}
          </div>
        </div>
      `;

      // Update progress
      const progress = ((index + 1) / questions.length) * 100;
      elements.progressBar.style.width = `${progress}%`;
      elements.progressText.textContent = `${index + 1} / ${questions.length}`;

      // Update buttons
      elements.prevBtn.disabled = index === 0;
      elements.nextBtn.disabled = !answers[index];
    }

    // Handle option change
    function handleOptionChange(index, value) {
      answers[index] = value;
      elements.nextBtn.disabled = false;

      // Auto next if not last question
      if (index < questions.length - 1) {
        setTimeout(() => {
          currentQuestion++;
          renderQuestion(currentQuestion);
        }, 300);
      }
    }

    // Calculate result
    function calculateResult() {
      const scores = {
        FUN: 0,
        WEIRD: 0,
        LAZY: 0,
        CRAZY: 0,
        CHILL: 0
      };

      // Calculate scores
      answers.forEach(answer => {
        const [dim, level] = answer.split('_');
        if (level === 'H') {
          scores[dim] += 5;
        }
      });

      // Determine main type
      let mainType = 'FUNNY';
      let maxScore = scores.FUN;

      for (const [dim, score] of Object.entries(scores)) {
        if (score > maxScore) {
          maxScore = score;
          mainType = dim === 'FUN' ? 'FUNNY' : dim === 'WEIRD' ? 'WEIRDO' : dim === 'LAZY' ? 'LAZYBONE' : dim === 'CRAZY' ? 'CRAZYPANTS' : 'CHILLMASTER';
        }
      }

      // Randomly select a normal type if scores are too low
      if (maxScore < 30) {
        const randomType = NORMAL_TYPES[Math.floor(Math.random() * NORMAL_TYPES.length)];
        mainType = randomType.code;
      }

      return {
        type: mainType,
        scores,
        match: Math.floor(Math.random() * 20) + 80 // 80-99%
      };
    }

    // Render result
    function renderResult(result) {
      const data = results[result.type];
      if (!data) return;

      // Update UI
      elements.resultTypeName.textContent = data.name;
      elements.resultTypeSub.textContent = data.sub;
      elements.resultDesc.textContent = data.desc;
      elements.matchBadge.textContent = `匹配度 ${result.match}%`;
      elements.funNote.textContent = data.funNote;

      // Render dimensions
      elements.dimList.innerHTML = data.dims.map(dim => `
        <div class="dim-item">
          <div class="dim-item-top">
            <div class="dim-item-name">${dimensionMeta[dim.name].name}</div>
            <div class="dim-item-score">${dim.score}%</div>
          </div>
          <p>${dim.desc}</p>
        </div>
      `).join('');

      // Load poster image
      elements.posterImage.className = 'poster-image loading';
      elements.posterImage.src = TYPE_IMAGES[result.type] || '';
      elements.posterImage.alt = data.name;

      elements.posterImage.onload = function() {
        elements.posterImage.classList.remove('loading');
        elements.posterBox.classList.remove('no-image');
      };

      elements.posterImage.onerror = function() {
        elements.posterImage.classList.remove('loading');
        elements.posterBox.classList.add('no-image');
        elements.posterCaption.textContent = '图片加载失败，但你的人格依然闪亮！';
      };
    }

    // Start test
    function startTest(isRestart = false) {
      showLoading();
      setTimeout(() => {
        hideLoading();
        currentQuestion = 0;
        answers = new Array(questions.length).fill('');
        switchScreen('test');
        renderQuestion(currentQuestion);
      }, 800);
    }

    // Next question
    function nextQuestion() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
      } else {
        // Show result
        showLoading();
        const result = calculateResult();
        setTimeout(() => {
          hideLoading();
          switchScreen('result');
          renderResult(result);
        }, 1500);
      }
    }

    // Previous question
    function prevQuestion() {
      if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
      }
    }

    // Back to intro
    function backToIntro() {
      switchScreen('intro');
    }

    // Restart test
    function restartTest() {
      startTest(true);
    }

    // Event listeners
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.prevBtn.addEventListener('click', prevQuestion);
    elements.backIntroBtn.addEventListener('click', backToIntro);
    elements.restartBtn.addEventListener('click', restartTest);
    elements.toTopBtn.addEventListener('click', backToIntro);
    elements.startBtn.addEventListener('click', () => startTest(false));
