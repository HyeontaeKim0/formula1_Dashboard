import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-dark to-dark-light border-t border-dark-lighter mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold">F1</span>
              </div>
              <h3 className="text-lg font-bold">F1 Dashboard</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              포뮬러1 레이스 일정, 결과, 순위, 드라이버 정보를 한눈에
              확인하세요.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  일정
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  결과
                </Link>
              </li>
              <li>
                <Link
                  href="/standings"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  순위
                </Link>
              </li>
              <li>
                <Link
                  href="/drivers"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  드라이버
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">정보</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  문의 · 제안
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-lighter pt-8">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            This website is not officially affiliated with Formula 1®, Formula
            One Management, Formula One World Championship™ or any other related
            companies. F1®, FORMULA 1®, FORMULA ONE®, FORMULA ONE WORLD
            CHAMPIONSHIP™ and related logos are registered trademarks of Formula
            One Licensing B.V.
          </p>
          <p className="text-gray-500 text-xs text-center mt-4">
            All race data and statistics on this site are provided with
            reference to official Formula 1® materials. While we strive for
            accuracy, please refer to F1.com for official records.
          </p>
        </div>
      </div>
    </footer>
  );
}
