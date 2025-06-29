export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl mb-10 text-accent-400 font-medium">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-lg">
        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            1. 情報の収集について
          </h2>
          <p>
            当アプリケーション「The Wild
            Oasis」では、以下の情報を収集いたします：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>メールアドレス（ログイン機能のため）</li>
            <li>お名前（予約確認と本人確認のため）</li>
            <li>プロフィール画像（Googleアカウント連携時）</li>
            <li>予約情報（宿泊日、キャビン選択、人数など）</li>
            <li>アカウント設定情報</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            2. 情報収集の目的
          </h2>
          <p>収集した情報は以下の目的で利用いたします：</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>ユーザーアカウントの作成と管理</li>
            <li>宿泊予約の処理と確認</li>
            <li>予約状況の管理と通知</li>
            <li>カスタマーサポートの提供</li>
            <li>サービスの改善と開発</li>
            <li>法的要件への対応</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            3. 情報の利用と保管
          </h2>
          <p>
            収集した情報は、適切なセキュリティ対策を講じて安全に保管いたします。
            データは以下の方法で管理されます：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>暗号化されたデータベースでの安全な保管</li>
            <li>アクセス権限の厳格な管理</li>
            <li>定期的なセキュリティ監査の実施</li>
            <li>不要になったデータの適切な削除</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            4. 第三者への情報提供
          </h2>
          <p>
            当アプリケーションは、以下の場合を除き、収集した個人情報を第三者に提供いたしません：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>ユーザーの明示的な同意がある場合</li>
            <li>法的義務に基づく場合</li>
            <li>ユーザーの安全や権利を保護するために必要な場合</li>
            <li>サービス提供に必要な限定的な範囲での委託先への提供</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            5. ユーザーの権利
          </h2>
          <p>ユーザーは以下の権利を有します：</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>個人情報の確認・訂正・削除の要求</li>
            <li>データ処理の停止要求</li>
            <li>データの可搬性の要求</li>
            <li>処理に対する異議申し立て</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            6. クッキーとトラッキング技術
          </h2>
          <p>
            当アプリケーションでは、ユーザーエクスペリエンスの向上とサービスの改善のために、
            クッキーや類似の技術を使用する場合があります。これらの技術は、
            セッション管理、認証、分析目的で使用されます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            7. データ保持期間
          </h2>
          <p>
            個人情報は、収集目的の達成に必要な期間、または法的要件に基づく期間、
            どちらか長い期間にわたって保持されます。不要になったデータは、
            適切かつ安全な方法で削除いたします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            8. セキュリティ対策
          </h2>
          <p>
            当アプリケーションは、個人情報の保護のために以下のセキュリティ対策を実施しています：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>SSL暗号化による通信の保護</li>
            <li>アクセス制御と認証の強化</li>
            <li>定期的なセキュリティ監査</li>
            <li>従業員へのプライバシー保護教育</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            9. プライバシーポリシーの変更
          </h2>
          <p>
            当プライバシーポリシーは、必要に応じて更新される場合があります。
            重要な変更がある場合は、アプリケーション内で通知いたします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4 text-accent-300 font-medium">
            10. お問い合わせ
          </h2>
          <p>
            プライバシーポリシーに関するご質問やご要望がございましたら、
            以下の方法でお気軽にお問い合わせください：
          </p>
          <div className="mt-4 p-4 bg-primary-900 rounded-lg">
            <p className="font-medium">The Wild Oasis</p>
            <p>Email: morisawashogo@gmail.com</p>
            <p>最終更新日: 2025年6月</p>
          </div>
        </section>
      </div>
    </div>
  );
}
