<script lang="ts">
  import { writable } from 'svelte/store';

  const language = writable('ja');
  const content = {
    ja: {
      title: 'Aleph Zero の基本と始め方',
      sections: [
        {
          title: 'Aleph Zero の基本的な説明',
          content: 'Aleph Zeroは、2020年に立ち上げられた高性能で安全な分散型ブロックチェーンプラットフォームです。革新的なAlephBFTコンセンサスプロトコルを活用し、高いスケーラビリティと即時性を実現しています。企業向けソリューションとブロックチェーン技術の架け橋となることで、Aleph Zeroは企業や個人が安全で効率的な分散型アプリケーションを構築することを可能にしています。'
        },
        {
          title: 'ビジョン',
          content: 'Aleph Zeroのビジョンは、スケーラビリティ、セキュリティ、分散化の基本的な課題に取り組むことでブロックチェーン業界に革命をもたらすことです。プラットフォームは以下の達成を目指しています：\n\n高いスケーラビリティ：1秒あたり最大10万トランザクション（TPS）を処理。\n即時性：数秒以内にトランザクションを確認。\nプライバシー強化：ゼロ知識証明を活用して機密データを保護。\nカーボンニュートラル：エネルギー効率の高いコンセンサスメカニズムを採用。\n真の分散化：分散化されたノードネットワークを育成。'
        },
        {
          title: 'Web3 の背景',
          content: 'Aleph ZeroはWeb3エコシステムにおける地位を以下を通じて確立しています：\n\n技術革新：AlephBFTコンセンサスプロトコルの先駆的開発。\n学術的協力：ブロックチェーン技術を進歩させるために著名な研究機関とのパートナーシップ。\n企業向けフォーカス：企業や組織向けのソリューションの調整。\nプライバシー保護機能：データの機密性を確保するためのゼロ知識証明の実装。'
        },
        {
          title: 'Aleph Zero EVM (レイヤー 2)',
          content: 'Aleph Zero EVMは、イーサリアム仮想マシン（EVM）との互換性を提供するレイヤー2ソリューションです。これにより、既存のイーサリアムベースのDAppsをAleph Zeroプラットフォームにシームレスに移行できます。以下の利点を提供します：\n\n高いスケーラビリティ：トランザクション手数料の削減と処理時間の短縮。\n強化されたセキュリティ：Aleph Zeroの堅牢なセキュリティメカニズムの活用。\n相互運用性：イーサリアムエコシステムとのシームレスな統合。'
        },
        {
          title: 'zkOS',
          content: 'zkOS（Aleph Zeroのゼロ知識証明システム）は、機密情報を明かすことなくトランザクションの有効性を検証することをユーザーに可能にします。これにより以下が確保されます：\n\nプライバシー：ユーザーデータを保護し、匿名性を維持。\nスケーラビリティ：効率的でスケーラブルなトランザクションを実現。\n透明性：ブロックチェーン上のトランザクションの整合性を検証。'
        },
        {
          title: 'ウォレット',
          content: 'Aleph Zeroは様々なユーザーの好みに対応するために、多様なウォレットソリューションをサポートしています：\n\nAleph Zero Portal：ユーザーフレンドリーな体験を提供する公式のWebウォレットインターフェース。\nSubWallet：Aleph Zeroをサポートする多用途なマルチチェーンウォレット。\nNova Wallet：外出先でのアクセスに適したモバイルフレンドリーなウォレットソリューション。\nハードウェアウォレットサポート：セキュリティ強化のためのLedgerデバイスとの統合。\n\nこれらのウォレットを通じて、ユーザーはAZEROトークンの管理、DAppsとの対話、ネットワークガバナンスへの参加が可能です。'
        },
        {
          title: 'コミュニティ概要',
          content: 'Aleph Zeroは活発でグローバルなコミュニティを誇り、以下の特徴があります：\n\n熱心なメンバー：開発者、熱狂的なファン、投資家からなる情熱的なコミュニティ。\n教育イニシアチブ：定期的なワークショップ、AMA、教育コンテンツの提供。\n成長するエコシステム：プラットフォーム上に構築されるDAppsやプロジェクトの増加。\nコミュニティガバナンス：意思決定プロセスへの積極的な参加。\nソーシャルメディアでの存在感：Twitter、Telegram、Discord、Redditでの強力なプレゼンス。'
        },
        {
          title: 'AZERO トークン (何？ 入手方法は？)',
          content: 'AZEROは、Aleph Zeroブロックチェーンのネイティブ暗号通貨です。エコシステムの中核として、以下の機能を提供します：\n\nネットワークセキュリティ：ステーキングを通じてネットワークを保護。\nトランザクション手数料：トランザクション処理の支払い。\nガバナンス：オンチェーンガバナンスの決定に参加。\nインセンティブ化：バリデーターとノミネーターへの報酬。\nエコシステム開発：Aleph Zeroエコシステムの成長をサポート。\n\nAZEROトークンの入手方法：\n1. 暗号通貨取引所：Gate.io、KuCoin、MEXCなどのプラットフォームでの購入。\n2. ステーキング：AZEROトークンをロックして報酬を獲得。\n3. コミュニティプログラム：エコシステム開発やコミュニティイニシアチブへの参加。\n\nトークノミクス：\nAZEROのトークノミクスは、ネットワークの長期的な持続可能性と成長を確保するように設計されています。主な特徴は以下の通りです：\n\n初期配布：開発、エコシステムの成長、コミュニティイニシアチブに資金を提供するための戦略的なトークン配分。\n制御されたインフレーション：ネットワークのセキュリティを奨励し、トークン保有者に報酬を与えるバランスの取れたインフレーションモデル。'
        },
      ],
      ecosystem: {
        title: 'Aleph Zeroのエコシステムを探索',
        sections: [
          {
            title: 'dApps概要',
            content: 'Aleph Zeroのエコシステムは、多様な分散型アプリケーション（dApps）で急速に拡大しています。これらのdAppsは、様々な分野におけるプラットフォームの汎用性を示しています。Aleph Zero上に構築された主要なdAppsをいくつか見てみましょう：\n\nAleph ZeroのWASMレイヤー（L1）上のdApps：\n1. Tubbly：コンテンツの作成と共有のための分散型ソーシャルメディアプラットフォーム。\n2. Common：クリエイターがコンテンツを収益化しコミュニティを構築するためのプラットフォーム。\n3. Ink Whale：デジタル資産のための分散型NFTマーケットプレイス。\n4. AZERO ID：デジタルアイデンティティ管理のための分散型アイデンティティソリューション。\n5. ArtZero：アーティストがデジタルアートを直接コレクターに販売するためのプラットフォーム。\n6. motoDEX：暗号通貨とトークン取引のための分散型取引所。\n7. Upcade：ゲーマーがゲームプレイを通じて報酬を獲得するためのプラットフォーム。\n8. Double Or Trouble：分散型カジノゲーム。\n9. AndromedaSwap：暗号通貨取引のためのもう一つの分散型取引所。\n10. AzeroMessage：分散型メッセージングプラットフォーム。\n\nAleph ZeroのEVMレイヤー（L2）上のdApps：\n1. projekt lol：ゲーミングとeスポーツのためのプラットフォーム。\n2. DRKVRS：バーチャルリアリティ体験のためのプラットフォーム。\n3. SYNCRA：分散型データストレージと共有ソリューション。\n4. ParrotLink：クロスチェーンブリッジ。\n5. Abax Protocol：分散型金融（DeFi）プロトコル。\n6. Pepe the Game：分散型ゲーミングプラットフォーム。\n\n追加のdApps：\n7. Liminal：プライバシー保護zkSNARKソリューション。\n8. Gatenox：分散型アイデンティティ検証プラットフォーム。\n9. Cardinal Cryptography：高度な暗号ソリューションのプロバイダー。\n\nこの成長するエコシステムは、ソーシャルメディアやゲーミングからDeFiやアイデンティティ管理まで、幅広いアプリケーションをサポートするAleph Zeroの可能性を示しています。'
          },
        ],
      },
    },
    en: {
      title: 'Aleph Zero Basics and How to Start',
      sections: [
        {
          title: 'Basic explanation of Aleph Zero',
          content: 'Aleph Zero is a high-performance, secure, and decentralized blockchain platform launched in 2020. It utilizes the innovative AlephBFT consensus protocol, enabling high scalability and near-instant finality. By bridging the gap between enterprise solutions and blockchain technology, Aleph Zero empowers businesses and individuals to build secure and efficient decentralized applications.'
        },
        {
          title: 'Vision',
          content: 'Aleph Zero\'s vision is to revolutionize the blockchain industry by addressing the fundamental challenges of scalability, security, and decentralization. The platform aims to achieve:\n\nHigh Scalability: Processing up to 100,000 transactions per second (TPS).\nNear-Instant Finality: Confirming transactions within seconds.\nEnhanced Privacy: Leveraging zero-knowledge proofs to protect sensitive data.\nCarbon Neutrality: Adopting energy-efficient consensus mechanisms.\nTrue Decentralization: Fostering a distributed network of nodes.'
        },
        {
          title: 'Background in Web3',
          content: 'Aleph Zero has solidified its position in the Web3 ecosystem through:\n\nTechnical Innovation: Pioneering the AlephBFT consensus protocol.\nAcademic Collaboration: Partnering with renowned research institutions to advance blockchain technology.\nEnterprise Focus: Tailoring solutions for businesses and organizations.\nPrivacy-Preserving Features: Implementing zero-knowledge proofs to ensure data confidentiality.'
        },
        {
          title: 'Aleph Zero EVM (Layer 2)',
          content: 'Aleph Zero EVM is a Layer 2 solution that provides compatibility with the Ethereum Virtual Machine (EVM). This enables seamless migration of existing Ethereum-based DApps to the Aleph Zero platform, offering the benefits of:\n\nHigh Scalability: Reduced transaction fees and faster processing times.\nEnhanced Security: Leveraging Aleph Zero\'s robust security mechanisms.\nInteroperability: Seamless integration with the Ethereum ecosystem.'
        },
        {
          title: 'zkOS',
          content: 'zkOS, Aleph Zero\'s zero-knowledge proof system, empowers users to verify transaction validity without revealing sensitive information. This ensures:\n\nPrivacy: Protecting user data and maintaining anonymity.\nScalability: Enabling efficient and scalable transactions.\nTransparency: Verifying the integrity of transactions on the blockchain.'
        },
        {
          title: 'Wallet',
          content: 'Aleph Zero supports a variety of wallet solutions to cater to different user preferences:\n\nAleph Zero Portal: The official web wallet interface, providing a user-friendly experience.\nSubWallet: A versatile multi-chain wallet that supports Aleph Zero.\nNova Wallet: A mobile-friendly wallet solution for on-the-go access.\nHardware Wallet Support: Integration with Ledger devices for enhanced security.\n\nThese wallets allow users to manage their AZERO tokens, interact with DApps, and participate in network governance.'
        },
        {
          title: 'Community overview',
          content: 'Aleph Zero boasts a vibrant and active global community, characterized by:\n\nEngaged Members: A passionate community of developers, enthusiasts, and investors.\nEducational Initiatives: Regular workshops, AMAs, and educational content.\nThriving Ecosystem: A growing number of DApps and projects built on the platform.\nCommunity Governance: Active participation in decision-making processes.\nSocial Media Presence: Strong presence on Twitter, Telegram, Discord, and Reddit.'
        },
        {
          title: 'AZERO token (What is it? How to get it)',
          content: 'AZERO is the native cryptocurrency of the Aleph Zero blockchain. It serves as the backbone of the ecosystem, powering various functionalities:\n\nNetwork Security: Securing the network through staking.\nTransaction Fees: Paying for transaction processing.\nGovernance: Participating in on-chain governance decisions.\nIncentivization: Rewarding validators and nominators.\nEcosystem Development: Supporting the growth of the Aleph Zero ecosystem.\n\nAZERO tokens can be acquired through:\n1. Cryptocurrency Exchanges: Purchasing on platforms like Gate.io, KuCoin, and MEXC.\n2. Staking: Locking up AZERO tokens to earn rewards.\n3. Community Programs: Participating in ecosystem development and community initiatives.\n\nTokenomics:\nAZERO\'s tokenomics is designed to ensure the long-term sustainability and growth of the network. Key features include:\n\nInitial Distribution: Strategic allocation of tokens to fund development, ecosystem growth, and community initiatives.\nControlled Inflation: A balanced inflation model to incentivize network security and reward token holders.'
        },
      ],
      ecosystem: {
        title: 'Explore Aleph Zero\'s Ecosystem',
        sections: [
          {
            title: 'dApps overview',
            content: 'Aleph Zero\'s ecosystem is rapidly expanding with a diverse range of decentralized applications (dApps). These dApps showcase the platform\'s versatility across various sectors. Let\'s explore some of the prominent dApps built on Aleph Zero:\n\ndApps on Aleph Zero\'s WASM Layer (L1):\n1. Tubbly: A decentralized social media platform for content creation and sharing.\n2. Common: A platform for creators to monetize content and build communities.\n3. Ink Whale: A decentralized NFT marketplace for digital assets.\n4. AZERO ID: A decentralized identity solution for digital identity management.\n5. ArtZero: A platform for artists to sell digital art directly to collectors.\n6. motoDEX: A decentralized exchange for cryptocurrency and token trading.\n7. Upcade: A platform for gamers to earn rewards through gameplay.\n8. Double Or Trouble: A decentralized casino game.\n9. AndromedaSwap: Another decentralized exchange for crypto trading.\n10. AzeroMessage: A decentralized messaging platform.\n\ndApps on Aleph Zero\'s EVM Layer (L2):\n1. projekt lol: A platform for gaming and esports.\n2. DRKVRS: A platform for virtual reality experiences.\n3. SYNCRA: A decentralized data storage and sharing solution.\n4. ParrotLink: A cross-chain bridge.\n5. Abax Protocol: A decentralized finance (DeFi) protocol.\n6. Pepe the Game: A decentralized gaming platform.\n\nAdditional dApps:\n7. Liminal: A privacy-preserving zkSNARK solution.\n8. Gatenox: A decentralized identity verification platform.\n9. Cardinal Cryptography: A provider of advanced cryptographic solutions.\n\nThis growing ecosystem demonstrates Aleph Zero\'s potential to support a wide range of applications, from social media and gaming to DeFi and identity management.'
          },
        ],
      },
    },
  };
</script>

<div class="flex flex-col min-h-screen bg-gray-900 text-white">
  <!-- Header -->
  <header class="bg-gray-800 p-4 flex items-center justify-between">
    <div class="flex items-center">
      <img src="/az.png?height=40&width=40" alt="Aleph Zero Logo" class="h-10 w-10 mr-4" />
      <h1 class="text-2xl font-bold">{$language === 'ja' ? 'Aleph Zero 情報' : 'Aleph Zero Info'}</h1>
    </div>
    <div role="group" aria-label="Language selection">
      <button
        on:click={() => language.set('ja')}
        class="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 {$language === 'ja' ? 'opacity-50 cursor-not-allowed' : ''}"
        disabled={$language === 'ja'}
        aria-pressed={$language === 'ja'}
      >
        日本語
      </button>
      <button
        on:click={() => language.set('en')}
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 {$language === 'en' ? 'opacity-50 cursor-not-allowed' : ''}"
        disabled={$language === 'en'}
        aria-pressed={$language === 'en'}
      >
        English
      </button>
    </div>
  </header>

  <div class="flex flex-col md:flex-row flex-grow">
    <!-- Sidebar -->
    <nav class="w-full md:w-64 bg-gray-800 p-4" aria-label="Sidebar">
      <h2 class="text-xl font-semibold mb-4">{$language === 'ja' ? content.ja.title : content.en.title}</h2>
      <ul class="space-y-2">
        {#each $language === 'ja' ? content.ja.sections : content.en.sections as section}
          <li>
            <a href="#{section.title}" class="text-blue-400 hover:text-blue-300">{section.title}</a>
          </li>
        {/each}
      </ul>
      <h2 class="text-xl font-semibold mt-8 mb-4">{$language === 'ja' ? content.ja.ecosystem.title : content.en.ecosystem.title}</h2>
      <ul class="space-y-2">
        {#each $language === 'ja' ? content.ja.ecosystem.sections : content.en.ecosystem.sections as section}
          <li>
            <a href="#{section.title}" class="text-blue-400 hover:text-blue-300">{section.title}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- Main content -->
    <main class="flex-1 p-8 overflow-y-auto">
      {#each $language === 'ja' ? content.ja.sections : content.en.sections as section}
        <section class="mb-8">
          <h3 id={section.title} class="text-2xl font-bold mb-4 text-blue-300">{section.title}</h3>
          <p class="text-gray-300 whitespace-pre-line">{section.content}</p>
        </section>
      {/each}

      <h2 class="text-3xl font-bold mt-12 mb-8 text-blue-200">{$language === 'ja' ? content.ja.ecosystem.title : content.en.ecosystem.title}</h2>
      {#each $language === 'ja' ? content.ja.ecosystem.sections : content.en.ecosystem.sections as section}
        <section class="mb-8">
          <h3 id={section.title} class="text-2xl font-bold mb-4 text-blue-300">{section.title}</h3>
          <p class="text-gray-300 whitespace-pre-line">{section.content}</p>
        </section>
      {/each}
    </main>
  </div>
</div>