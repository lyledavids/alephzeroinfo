<script lang="ts">
    import { writable } from 'svelte/store';
  
    const language = writable('ja');
    const content = {
      ja: {
        title: 'Aleph Zero の基本と始め方',
        sections: [
          {
            title: 'Aleph Zero の基本的な説明',
            content: 'Aleph Zeroは、高速で安全な分散型ブロックチェーンプラットフォームです。独自のAlephBFTコンセンサスプロトコルを使用し、高いスケーラビリティと即時性を実現しています。Aleph Zeroは、企業向けソリューションとブロックチェーン技術の架け橋となることを目指しています。'
          },
          {
            title: 'ビジョン',
            content: 'Aleph Zeroのビジョンは、ブロックチェーントリレンマ（スケーラビリティ、セキュリティ、分散化）を同時に解決することです。具体的には、プライバシー保護機能、高いスケーラビリティ（最大10万TPS）、即時性、カーボンニュートラル、そして真の分散化を実現しつつ、パフォーマンスを損なわないことを目指しています。'
          },
          {
            title: 'Web3 の背景',
            content: 'Aleph ZeroはWeb3エコシステムの重要な部分として位置づけられています。技術革新（AlephBFTコンセンサスプロトコル）、学術的基盤（査読付き論文と学術機関との協力）、企業向けフォーカス、プライバシー機能（ゼロ知識証明の実装）などを通じて、分散型アプリケーションの開発をサポートしています。'
          },
          {
            title: 'Aleph Zero EVM (レイヤー 2)',
            content: 'Aleph Zero EVMは、イーサリアム仮想マシン（EVM）互換性を提供するレイヤー2ソリューションです。これにより、既存のイーサリアムベースのデセントラライズドアプリケーション（DApps）をAleph Zeroプラットフォームに容易に移行できます。高いスケーラビリティと低いガス料金を維持しつつ、イーサリアムのエコシステムとの相互運用性を実現します。'
          },
          {
            title: 'zkOS',
            content: 'zkOS（ゼロ知識オペレーティングシステム）は、Aleph Zeroのゼロ知識証明システムです。このシステムにより、トランザクションの詳細を公開することなく、その有効性を証明することができます。zkOSは、プライバシーを保護しつつ、スケーラブルで透明性のある取引を可能にし、企業や個人ユーザーにとって重要なデータ保護を実現します。'
          },
          {
            title: 'ウォレット',
            content: 'Aleph Zeroは複数のウォレットソリューションをサポートしています。主なオプションには以下があります：\n1. Aleph Zero Portal：公式のWebウォレットインターフェース\n2. SubWallet：Aleph Zeroをサポートするマルチチェーンウォレット\n3. Nova Wallet：モバイルウォレットソリューション\n4. ハードウェアウォレットサポート：Ledgerデバイスとの統合による安全な資産保管\nこれらのウォレットを通じて、ユーザーは資産管理、ステーキング、スマートコントラクトとの対話が可能です。'
          },
          {
            title: 'コミュニティ概要',
            content: 'Aleph Zeroは活発なグローバルコミュニティを持っています。主な特徴は以下の通りです：\n1. 世界中の活発なコミュニティメンバー\n2. 定期的なワークショップ、AMA、教育コンテンツの提供\n3. 成長中の開発者コミュニティ\n4. プロトコルガバナンスへの積極的な参加\n5. ソーシャルチャンネル：Twitter/X、Telegram、Discord、Redditでのアクティブな存在'
          },
          {
            title: 'AZERO トークン (何？ 入手方法は？)',
            content: 'AZEROは、Aleph Zeroのネイティブトークンです。主な用途は以下の通りです：\n1. ステーキングによるネットワークの安全性確保\n2. 取引手数料の支払い\n3. ガバナンスへの参加\n4. バリデーターとノミネーターへのインセンティブ提供\n5. エコシステムの経済モデルのサポート\n\nAZEROトークンの入手方法：\n1. 暗号通貨取引所（Gate.io、KuCoin、MEXCなど）\n2. ステーキング参加\n3. エコシステムへの貢献やコミュニティプログラムへの参加\n\n主要なトークノミクス：\n \n- 初期配布：開発、エコシステム成長、コミュニティイニシアチブのための戦略的配分\n- インフレーション：ネットワークのセキュリティとステーキング報酬をサポートする制御されたインフレーションモデル'
          },
        ],
        ecosystem: {
          title: 'Aleph Zeroのエコシステムを探索',
          sections: [
            {
              title: 'dApps概要',
              content: '----------'
            },
            {
              title: 'レビュー',
              content: '----------'
            },
            {
              title: 'dAppsの使用方法に関するビデオ説明',
              content: '----------'
            },
          ],
        },
      },
      en: {
        title: 'Aleph Zero Basics and How to Start',
        sections: [
          {
            title: 'Basic explanation of Aleph Zero',
            content: 'Aleph Zero is a fast, secure, and decentralized blockchain platform. It utilizes a unique AlephBFT consensus protocol to achieve high scalability and near-instant finality. Aleph Zero aims to bridge the gap between enterprise solutions and blockchain technology.'
          },
          {
            title: 'Vision',
            content: 'Aleph Zero\'s vision is to solve the blockchain trilemma by achieving scalability, security, and decentralization simultaneously. Specifically, it aims to combine privacy-preserving features, high scalability (up to 100,000 TPS), near-instant finality, carbon neutrality, and true decentralization without compromising performance.'
          },
          {
            title: 'Background in Web3',
            content: 'Aleph Zero has established itself as a significant player in the Web3 ecosystem through technical innovation (AlephBFT consensus protocol), academic foundation (peer-reviewed papers and collaboration with academic institutions), enterprise focus, and privacy features (implementation of zero-knowledge proofs), supporting the development of decentralized applications.'
          },
          {
            title: 'Aleph Zero EVM (Layer 2)',
            content: 'Aleph Zero EVM is a Layer 2 solution that provides Ethereum Virtual Machine (EVM) compatibility. This allows for easy migration of existing Ethereum-based decentralized applications (DApps) to the Aleph Zero platform. It maintains high scalability and low gas fees while enabling interoperability with the Ethereum ecosystem.'
          },
          {
            title: 'zkOS',
            content: 'zkOS (Zero-Knowledge Operating System) is Aleph Zero\'s zero-knowledge proof system. This system allows for the verification of transaction validity without revealing transaction details. zkOS enables scalable and transparent transactions while maintaining privacy, crucial for both enterprise and individual users who require data protection.'
          },
          {
            title: 'Wallet',
            content: 'Aleph Zero supports multiple wallet solutions. The main options include:\n1. Aleph Zero Portal: The official web wallet interface\n2. SubWallet: A multi-chain wallet supporting Aleph Zero\n3. Nova Wallet: Mobile wallet solution\n4. Hardware Wallet Support: Integration with Ledger devices for secure storage\nThrough these wallets, users can manage assets, stake tokens, and interact with smart contracts.'
          },
          {
            title: 'Community overview',
            content: 'Aleph Zero has a vibrant global community characterized by:\n1. Active community members from various regions worldwide\n2. Regular workshops, AMAs, and educational content\n3. Growing ecosystem of developers building on the platform\n4. Active involvement in protocol governance and decision-making\n5. Social Channels: Active presence on Twitter/X, Telegram, Discord, and Reddit'
          },
          {
            title: 'AZERO token (What is it? How to get it)',
            content: 'AZERO is the native token of the Aleph Zero blockchain. Its main uses include:\n1. Securing the network through staking\n2. Paying for transaction fees\n3. Participating in governance\n4. Incentivizing validators and nominators\n5. Supporting the ecosystem\'s economic model\n\nWays to acquire AZERO:\n1. Cryptocurrency Exchanges (e.g., Gate.io, KuCoin, MEXC)\n2. Staking\n3. Ecosystem Participation and community programs\n\nKey Tokenomics:\n \n- Initial Distribution: Strategic allocations for development, ecosystem growth, and community initiatives\n- Inflation: Controlled inflation model to support network security and staking rewards'
          },
        ],
        ecosystem: {
          title: 'Explore Aleph Zero\'s Ecosystem',
          sections: [
            {
              title: 'dApps overview',
              content: '----------'
            },
            {
              title: 'Reviews',
              content: '----------'
            },
            {
              title: 'Video explanations of how to use dApps',
              content: '----------'
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