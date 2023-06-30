import Head from 'next/head'
import styles from 'modules/styles/Home.module.css'

import Nav from 'modules/components/Nav'
import Footer from 'modules/components/Footer'
import Scroll from 'modules/components/Scroll';
import Research from 'modules/components/Research'
import Link from 'next/link'

import { researches, welfares } from 'modules/Data/ments';

export default function Home() {
  return (
    <>
      <Head>
        <title>ICBM_LABS</title>
        <meta name="description" content="IOT 서비스 연구의 중심 ICBM 연구실" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Nav />
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.left}>
            <p className={styles.title}>
              ICBM Labs.
            </p>
            <div className={styles.description}>
              <p>Dream with code</p>
              <p>We make arts</p>
            </div>
          </div>
          <div className={styles.right}>
            <svg className={styles.hat} width="129" height="80" viewBox="0 0 129 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.70341 24.7406L64.013 2.00781C64.4616 1.84147 64.955 1.84147 65.4036 2.00781L126.713 24.7406C127.07 24.8728 127.07 25.3772 126.713 25.5094L65.4036 48.2422C64.955 48.4085 64.4616 48.4085 64.013 48.2422L2.70341 25.5094C2.34679 25.3772 2.34679 24.8728 2.70341 24.7406Z" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M124.917 25.8333V48.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25.75 37.1667V66.5119C25.75 66.5119 29.2917 78.25 64.7083 78.25C100.125 78.25 103.667 66.5119 103.667 66.5119V37.1667" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className={styles.head} cx="142" cy="94.6667" r="44.8333" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
              <path className={styles.head} d="M172.588 90C176.964 82.4204 184.172 76.8897 192.626 74.6244C201.08 72.3592 210.087 73.5451 217.667 77.9212C225.246 82.2972 230.777 89.505 233.042 97.959C235.307 106.413 234.122 115.42 229.745 123C225.369 130.58 218.162 136.11 209.708 138.376C201.254 140.641 192.246 139.455 184.667 135.079C177.087 130.703 171.556 123.495 169.291 115.041C167.026 106.587 168.212 97.5796 172.588 90L172.588 90Z" stroke="#fff" strokeWidth="5" />
              <path className={styles.head} d="M54.2545 90C58.6306 82.4204 65.8384 76.8897 74.2923 74.6244C82.7463 72.3592 91.7538 73.5451 99.3334 77.9212C106.913 82.2972 112.444 89.505 114.709 97.959C116.974 106.413 115.788 115.42 111.412 123C107.036 130.58 99.8283 136.11 91.3744 138.376C82.9205 140.641 73.913 139.455 66.3334 135.079C58.7538 130.703 53.223 123.495 50.9578 115.041C48.6926 106.587 49.8785 97.5796 54.2545 90L54.2545 90Z" stroke="#fff" strokeWidth="5" />
              <path className={styles.body} d="M199.766 213L197.315 213.494L197.719 215.5H199.766V213ZM248.33 211.889L245.864 212.305L245.864 212.305L248.33 211.889ZM174.906 174.075L173.394 172.084L170.503 174.28L173.586 176.198L174.906 174.075ZM247.367 210.5H199.766V215.5H247.367V210.5ZM245.864 212.305C245.693 211.29 246.507 210.5 247.367 210.5V215.5C249.43 215.5 251.167 213.674 250.795 211.472L245.864 212.305ZM201.167 168.167C218.932 168.167 229.714 177.317 236.314 187.465C242.976 197.708 245.284 208.871 245.864 212.305L250.795 211.472C250.169 207.771 247.714 195.823 240.505 184.739C233.235 173.56 221.038 163.167 201.167 163.167V168.167ZM176.419 176.065C182.566 171.396 190.599 168.167 201.167 168.167V163.167C189.489 163.167 180.397 166.765 173.394 172.084L176.419 176.065ZM173.586 176.198C189.099 185.846 195.049 202.244 197.315 213.494L202.217 212.506C199.842 200.714 193.463 182.672 176.227 171.952L173.586 176.198Z" fill="#fff" />
              <path className={styles.body} d="M109.094 174.074L110.414 176.197L113.497 174.28L110.606 172.084L109.094 174.074ZM35.6703 211.889L33.2053 211.472L33.2053 211.472L35.6703 211.889ZM84.2338 213V215.5H86.2805L86.6846 213.494L84.2338 213ZM82.8335 168.167C93.4014 168.167 101.434 171.396 107.581 176.065L110.606 172.084C103.603 166.765 94.511 163.167 82.8335 163.167V168.167ZM38.1354 212.305C38.7156 208.871 41.024 197.708 47.6861 187.465C54.2863 177.317 65.0687 168.167 82.8335 168.167V163.167C62.9619 163.167 50.7656 173.56 43.4946 184.739C36.2856 195.823 33.8306 207.771 33.2053 211.472L38.1354 212.305ZM36.6327 210.5C37.4931 210.5 38.3069 211.29 38.1354 212.305L33.2053 211.472C32.8333 213.674 34.5694 215.5 36.6327 215.5V210.5ZM84.2338 210.5H36.6327V215.5H84.2338V210.5ZM86.6846 213.494C88.9503 202.244 94.9003 185.846 110.414 176.197L107.773 171.952C90.5364 182.672 84.1581 200.714 81.783 212.506L86.6846 213.494Z" fill="#fff" />
              <path className={styles.body} d="M142 165.667C196.693 165.667 200.828 216.223 201.141 223.869C201.164 224.421 200.719 224.833 200.167 224.833H83.8334C83.2811 224.833 82.8364 224.421 82.859 223.869C83.1717 216.223 87.3075 165.667 142 165.667Z" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className={styles.view}>
          <div className={styles.contentNav}>
            <p className={styles.title}>Contents</p>
            <div className={styles.items}>
              <Link href={"#"} scroll={false} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
                Home
              </Link>
              <Link href={"#intro"} scroll={false}>
                소개
              </Link>
              <Link href={"#research"} scroll={false}>
                연구
              </Link>
              <Link href={"#welfare"} scroll={false}>
                복지
              </Link>
              <Link href={"#icbm"} scroll={false}>
                지원
              </Link>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={`${styles.content} ${styles.bg}`} style={{
              backgroundImage: 'url("/intro.jpeg")'
            }} id="intro">
              <p className={styles.title}>
                <svg width="60" height="60" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M65.625 49.2188V3.28125C65.625 1.46289 64.1621 0 62.3438 0H17.5C10.2539 0 4.375 5.87891 4.375 13.125V56.875C4.375 64.1211 10.2539 70 17.5 70H62.3438C64.1621 70 65.625 68.5371 65.625 66.7188V64.5312C65.625 63.5059 65.1465 62.5762 64.4082 61.9746C63.834 59.8691 63.834 53.8672 64.4082 51.7617C65.1465 51.1738 65.625 50.2441 65.625 49.2188ZM21.875 18.3203C21.875 17.8691 22.2441 17.5 22.6953 17.5H51.6797C52.1309 17.5 52.5 17.8691 52.5 18.3203V21.0547C52.5 21.5059 52.1309 21.875 51.6797 21.875H22.6953C22.2441 21.875 21.875 21.5059 21.875 21.0547V18.3203ZM21.875 27.0703C21.875 26.6191 22.2441 26.25 22.6953 26.25H51.6797C52.1309 26.25 52.5 26.6191 52.5 27.0703V29.8047C52.5 30.2559 52.1309 30.625 51.6797 30.625H22.6953C22.2441 30.625 21.875 30.2559 21.875 29.8047V27.0703ZM56.5195 61.25H17.5C15.0801 61.25 13.125 59.2949 13.125 56.875C13.125 54.4688 15.0938 52.5 17.5 52.5H56.5195C56.2598 54.8379 56.2598 58.9121 56.5195 61.25Z" fill="#e2e2e2" />
                </svg>
                <span className={styles.line}>연구실 소개</span>
              </p>
              <div className={styles.description}>
                <p>ICBM랩실은 컴퓨터 공학 및 관련 분야에서의 <span className={styles.line}>교육, 연구, 혁신</span>을 추구하며,</p>
                <p> 우수한 학부생과 박지수 교수님으로 구성되어 있습니다.</p>
                <br />
                <p>프로젝트 협업에 우리 ICBM 랩실과 같이 수행중인 <span className={styles.bold}>프로젝트</span></p>
                <p> 또는 <span className={styles.bold}>연구</span>에 대한 <span className={styles.line}>협력을 추진하여 <span className={styles.bold}>상호 지원</span> 합니다.</span></p>
                <br />
                <p>이를 통해 서로의 전문성을 공유하고 혁신적인 결과물을 도출 할 수 있습니다.</p>
                <p>교류 프로그램으로 ICBM 학생들간의 교류를 통해 </p>
                <p><span className={styles.line}>지식 공유 및 문화적 교류를 활성화 합니다.</span></p>
                <br />
                <p>학부생 및 대학원생의 교환 프로그램을 개발하여</p>
                <p>학문적인 성장과 국제적인 네트워크 형성을 돕습니다.</p>
              </div>
            </div>
            <div className={`${styles.content} ${styles.bg}`} style={{
              backgroundImage: 'url("/research.jpg")'
            }} id="research">
              <p className={styles.title}>
                <svg width="60" height="60" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6434 3.7185V5.95062C22.6434 7.91771 17.7443 9.52206 11.7059 9.52206C5.66746 9.52206 0.768387 7.91771 0.768387 5.95062V3.7185C0.768387 1.75141 5.66746 0.14706 11.7059 0.14706C17.7443 0.14706 22.6434 1.75141 22.6434 3.7185ZM22.6434 8.74081V13.7631C22.6434 15.7302 17.7443 17.3346 11.7059 17.3346C5.66746 17.3346 0.768387 15.7302 0.768387 13.7631V8.74081C3.11824 10.3591 7.41917 11.1125 11.7059 11.1125C15.9926 11.1125 20.2935 10.3591 22.6434 8.74081ZM22.6434 16.5533V21.5756C22.6434 23.5427 17.7443 25.1471 11.7059 25.1471C5.66746 25.1471 0.768387 23.5427 0.768387 21.5756V16.5533C3.11824 18.1716 7.41917 18.925 11.7059 18.925C15.9926 18.925 20.2935 18.1716 22.6434 16.5533Z" fill="#e2e2e2" />
                </svg>
                <span className={styles.line}>연구 목록</span>
              </p>
              <div className={styles.description}>
                <p>ICBM은 총 {researches.length}개의 연구를 진행했습니다.</p>
                <p>진행한 연구들은 다음과 같습니다.</p>
                <div className={styles.researchs}>
                  {researches.map(({ research, startDate, endDate }, index) => {
                    return <Research key={index} research={research} startDate={startDate} endDate={endDate} />
                  })}
                </div>
                <p>ICBM의 연구원이 되어</p>
                <p>새로운 연구를 도전해보세요.</p>
              </div>
            </div>
            <div className={`${styles.content} ${styles.bg}`} style={{
              backgroundImage: 'url("/welfare.jpg")'
            }} id="welfare">
              <p className={styles.title}>
                <svg width="60" height="60" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_56_6)">
                    <path d="M8.07308 17.8536C7.64876 17.4293 7.86995 17.5489 6.84652 17.275C6.38216 17.1505 5.97396 16.9112 5.60482 16.6246L3.38949 22.0562C3.17513 22.5821 3.57552 23.1534 4.1429 23.1319L6.71566 23.0338L8.48519 24.9029C8.87581 25.315 9.56136 25.1866 9.77572 24.6607L12.3172 18.4293C11.7879 18.7242 11.2005 18.8971 10.5931 18.8971C9.64095 18.8971 8.74642 18.5265 8.07308 17.8536ZM22.0223 22.0562L19.807 16.6246C19.4378 16.9117 19.0296 17.1505 18.5653 17.275C17.5365 17.5504 17.762 17.4303 17.3387 17.8536C16.6654 18.5265 15.7703 18.8971 14.8182 18.8971C14.2108 18.8971 13.6234 18.7237 13.0941 18.4293L15.6356 24.6607C15.8499 25.1866 16.536 25.315 16.9261 24.9029L18.6961 23.0338L21.2689 23.1319C21.8363 23.1534 22.2367 22.5816 22.0223 22.0562ZM16.1727 16.7486C16.9188 15.9893 17.0042 16.0548 18.0667 15.7652C18.745 15.5802 19.2752 15.0406 19.4569 14.3502C19.8221 12.9635 19.7274 13.1309 20.724 12.1163C21.2205 11.6109 21.4144 10.8741 21.2327 10.1837C20.868 8.79794 20.8675 8.9913 21.2327 7.60409C21.4144 6.91366 21.2205 6.17685 20.724 5.67148C19.7274 4.65683 19.8221 4.82382 19.4569 3.43759C19.2752 2.74716 18.745 2.20761 18.0667 2.02255C16.7054 1.65097 16.8695 1.74814 15.8719 0.732999C15.3753 0.227628 14.6512 0.0298737 13.973 0.214932C12.6121 0.586026 12.8021 0.586514 11.4388 0.214932C10.7606 0.0298737 10.0365 0.227139 9.53988 0.732999C8.54329 1.74765 8.70736 1.65097 7.34554 2.02255C6.66732 2.20761 6.13704 2.74716 5.9554 3.43759C5.59066 4.82382 5.6849 4.65683 4.68831 5.67148C4.19173 6.17685 3.9974 6.91366 4.17952 7.60409C4.54427 8.98886 4.54476 8.7955 4.17952 10.1832C3.99788 10.8736 4.19173 11.6104 4.68831 12.1163C5.6849 13.1309 5.59017 12.9635 5.9554 14.3502C6.13704 15.0406 6.66732 15.5802 7.34554 15.7652C8.43831 16.0631 8.51986 16.0162 9.23909 16.7486C9.88509 17.4063 10.8914 17.524 11.6678 17.0328C11.9783 16.8357 12.3384 16.731 12.7061 16.731C13.0739 16.731 13.434 16.8357 13.7445 17.0328C14.5203 17.524 15.5267 17.4063 16.1727 16.7486ZM8.09945 8.73886C8.09945 6.1495 10.1619 4.05038 12.7059 4.05038C15.2498 4.05038 17.3123 6.1495 17.3123 8.73886C17.3123 11.3282 15.2498 13.4273 12.7059 13.4273C10.1619 13.4273 8.09945 11.3282 8.09945 8.73886Z" fill="#e2e2e2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_56_6">
                      <rect width="25" height="25" fill="white" transform="translate(0.205887 0.14706)" />
                    </clipPath>
                  </defs>
                </svg>

                <span className={styles.line}>복지 내용</span>
              </p>
              <div className={styles.description}>
                <p>ICBM 연구실은 연구원분들의 편의를 위해</p>
                <p>아래와 같은 복지를 제공하고 있습니다.</p>
                <div className={styles.welfares}>
                  {welfares.map(({ title, description, etc }, index) => {
                    return <div className={styles.welfare} key={index}>
                      <p className={styles.title}>{title}</p>
                      <div className={styles.description}>
                        <p>{description}</p>
                        {etc?.map((value) => {
                          return <li className={styles.items} key={title}>{value}</li>
                        })}
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
            <div className={`${styles.content} ${styles.bg}`} style={{
              backgroundImage: 'url("/welcome.jpg")'
            }} id="icbm">
              <p className={styles.title}>
                <svg width="60" height="60" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="300" fill="#2E2E2E" />
                  <circle cx="150" cy="159.667" r="32.3333" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M170.882 156C174.065 150.488 179.307 146.465 185.455 144.818C191.603 143.17 198.154 144.033 203.667 147.215C209.179 150.398 213.201 155.64 214.849 161.788C216.496 167.937 215.634 174.488 212.451 180C209.269 185.512 204.027 189.535 197.878 191.182C191.73 192.83 185.179 191.967 179.667 188.785C174.154 185.602 170.132 180.36 168.484 174.212C166.837 168.063 167.699 161.512 170.882 156L170.882 156Z" stroke="#E2E2E2" strokeWidth="2" />
                  <path d="M87.5487 156C90.7313 150.488 95.9734 146.465 102.122 144.818C108.27 143.17 114.821 144.033 120.333 147.215C125.846 150.398 129.868 155.64 131.516 161.788C133.163 167.937 132.301 174.488 129.118 180C125.935 185.512 120.693 189.535 114.545 191.182C108.397 192.83 101.846 191.967 96.3333 188.785C90.8209 185.602 86.7986 180.36 85.1511 174.212C83.5037 168.063 84.3661 161.512 87.5487 156L87.5487 156Z" stroke="#E2E2E2" strokeWidth="2" />
                  <path d="M190.68 243L189.7 243.197L189.862 244H190.68V243ZM224.825 241.901L225.809 241.725V241.725L224.825 241.901ZM173.174 215.588L172.569 214.791L171.412 215.67L172.645 216.437L173.174 215.588ZM223.867 242H190.68V244H223.867V242ZM223.84 242.076C223.84 242.074 223.839 242.061 223.844 242.044C223.848 242.029 223.856 242.017 223.862 242.01C223.875 241.995 223.882 242 223.867 242V244C225.035 244 226.034 242.984 225.809 241.725L223.84 242.076ZM191.667 210.667C204.251 210.667 212.002 217.047 216.776 224.179C221.576 231.349 223.336 239.25 223.84 242.076L225.809 241.725C225.285 238.788 223.462 230.572 218.438 223.066C213.388 215.522 205.074 208.667 191.667 208.667V210.667ZM173.778 216.384C178.238 212.997 184.056 210.667 191.667 210.667V208.667C183.612 208.667 177.37 211.144 172.569 214.791L173.778 216.384ZM172.645 216.437C183.832 223.395 188.088 235.193 189.7 243.197L191.661 242.803C190.005 234.58 185.578 222.125 173.702 214.739L172.645 216.437Z" fill="#E2E2E2" />
                  <path d="M126.826 215.588L127.355 216.437L128.588 215.67L127.431 214.791L126.826 215.588ZM75.175 241.901L74.1906 241.725L75.175 241.901ZM109.32 243V244H110.138L110.3 243.197L109.32 243ZM108.333 210.667C115.944 210.667 121.763 212.997 126.222 216.384L127.431 214.791C122.63 211.144 116.388 208.667 108.333 208.667V210.667ZM76.1595 242.076C76.6639 239.25 78.4244 231.349 83.2242 224.179C87.9984 217.047 95.749 210.667 108.333 210.667V208.667C94.9266 208.667 86.6122 215.522 81.5622 223.066C76.5378 230.572 74.7147 238.788 74.1906 241.725L76.1595 242.076ZM76.1328 242C76.1176 242 76.125 241.995 76.138 242.01C76.1444 242.017 76.1516 242.029 76.1561 242.044C76.161 242.061 76.16 242.074 76.1595 242.076L74.1906 241.725C73.9659 242.984 74.9647 244 76.1328 244V242ZM109.32 242H76.1328V244H109.32V242ZM110.3 243.197C111.912 235.192 116.167 223.394 127.355 216.437L126.298 214.738C114.422 222.125 109.995 234.58 108.339 242.803L110.3 243.197Z" fill="#E2E2E2" />
                  <path d="M150 209.667C187.831 209.667 191.314 244.016 191.634 250.339C191.662 250.891 191.219 251.333 190.667 251.333H109.333C108.781 251.333 108.338 250.891 108.366 250.339C108.686 244.016 112.169 209.667 150 209.667Z" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M45.2595 63.8726L45.6987 64.1115L45.5609 64.3648L45.2726 64.3724L45.2595 63.8726ZM55.9322 57.8398C51.4927 57.9566 47.6792 60.47 45.6987 64.1115L44.8202 63.6337C46.9643 59.6915 51.0951 56.9667 55.9059 56.8401L55.9322 57.8398ZM68.2437 69.52C68.0694 62.8948 62.5573 57.6654 55.9322 57.8398L55.9059 56.8401C63.0831 56.6513 69.0545 62.3164 69.2433 69.4937L68.2437 69.52ZM56.5635 81.8315C63.1886 81.6571 68.418 76.1451 68.2437 69.52L69.2433 69.4937C69.4322 76.6709 63.767 82.6423 56.5898 82.8311L56.5635 81.8315ZM36.5704 82.3575L56.5635 81.8315L56.5898 82.8311L36.5967 83.3572L36.5704 82.3575ZM31.9536 77.9774C32.019 80.4619 34.086 82.4229 36.5704 82.3575L36.5967 83.3572C33.5602 83.4371 31.0338 81.0403 30.9539 78.0037L31.9536 77.9774ZM31.7234 69.2305L31.9536 77.9774L30.9539 78.0037L30.7238 69.2568L31.7234 69.2305ZM36.1035 64.6137C33.6191 64.679 31.6581 66.746 31.7234 69.2305L30.7238 69.2568C30.6439 66.2203 33.0407 63.6939 36.0772 63.614L36.1035 64.6137ZM45.2726 64.3724L36.1035 64.6137L36.0772 63.614L45.2463 63.3727L45.2726 64.3724Z" fill="#E2E2E2" />
                  <path d="M59.3129 81.954C61.5976 81.3761 63.6723 80.1642 65.2979 78.458C66.9235 76.7518 68.0336 74.6208 68.5003 72.3109C68.967 70.001 68.7711 67.6062 67.9354 65.4027C67.0997 63.1993 65.6581 61.277 63.777 59.8575C61.8958 58.4381 59.6517 57.5793 57.3035 57.3803C54.9553 57.1812 52.5987 57.6501 50.5055 58.7327C48.4123 59.8153 46.6677 61.4675 45.4731 63.4989C44.2784 65.5302 43.6823 67.8579 43.7535 70.2134" stroke="#E2E2E2" />
                  <path d="M258.179 56.9895L257.377 57.5872L258.179 56.9895C257.965 56.7022 257.684 56.5899 257.51 56.5403C257.377 56.502 257.225 56.4803 257.133 56.467C257.125 56.4658 257.117 56.4647 257.11 56.4636L251.502 55.6461C251.495 55.645 251.487 55.6439 251.479 55.6427C251.387 55.629 251.236 55.6067 251.096 55.6052C250.916 55.6031 250.615 55.6306 250.328 55.8448C250.04 56.0589 249.928 56.3397 249.878 56.5133C249.84 56.6471 249.818 56.7983 249.805 56.8908C249.804 56.899 249.803 56.9067 249.802 56.914L249.778 57.0789C249.776 57.0917 249.774 57.1047 249.772 57.1179C249.743 57.3156 249.709 57.5511 249.706 57.7576C249.703 58.0068 249.742 58.3578 249.987 58.6866C250.232 59.0154 250.558 59.1527 250.797 59.2212C250.996 59.278 251.231 59.3121 251.429 59.3409C251.442 59.3428 251.455 59.3446 251.468 59.3465L256.086 60.0198C256.099 60.0216 256.112 60.0236 256.125 60.0255C256.323 60.0544 256.558 60.0889 256.765 60.0912C257.014 60.094 257.365 60.0553 257.694 59.8102C258.023 59.5651 258.16 59.2397 258.228 59.0001C258.285 58.8015 258.319 58.566 258.348 58.3682C258.35 58.3551 258.352 58.3421 258.354 58.3292L258.378 58.1643C258.379 58.1571 258.38 58.1493 258.381 58.1411C258.395 58.0487 258.417 57.8976 258.419 57.7584C258.421 57.5778 258.393 57.2768 258.179 56.9895Z" fill="#E2E2E2" stroke="#E2E2E2" strokeWidth="2" />
                  <rect x="244.507" y="53.9524" width="20" height="30" rx="2" transform="rotate(8.29505 244.507 53.9524)" stroke="#E2E2E2" strokeWidth="2" />
                  <circle cx="250.796" cy="80.1336" r="1.66667" transform="rotate(8.29505 250.796 80.1336)" fill="#E2E2E2" />
                  <path d="M61.4411 278.518L61.4855 278.781C61.6719 279.886 61.7651 280.438 61.6213 280.896C61.4949 281.299 61.2441 281.652 60.9049 281.904C60.5193 282.19 59.9671 282.283 58.8626 282.469L37.2351 286.119C36.1306 286.306 35.5784 286.399 35.1203 286.255C34.7173 286.129 34.3647 285.878 34.113 285.539C33.8268 285.153 33.7336 284.601 33.5472 283.497L33.5028 283.234C33.3164 282.129 33.2232 281.577 33.367 281.119C33.4934 280.716 33.7442 280.363 34.0834 280.111C34.469 279.825 35.0212 279.732 36.1257 279.546L57.7532 275.896C58.8577 275.709 59.4099 275.616 59.868 275.76C60.271 275.886 60.6236 276.137 60.8753 276.476C61.1615 276.862 61.2547 277.414 61.4411 278.518Z" fill="#A38D8D" stroke="#E2E2E2" />
                  <path d="M33.525 283.365C33.1011 280.853 33.1389 269.38 33.1803 264.109C33.1877 263.169 33.1914 262.699 33.3672 262.312C33.5217 261.972 33.771 261.68 34.082 261.473C34.4361 261.238 34.9039 261.159 35.8396 261.001L51.9373 258.285C52.873 258.127 53.3408 258.048 53.7524 258.153C54.114 258.246 54.4455 258.441 54.703 258.711C54.996 259.019 55.1537 259.462 55.4691 260.347C57.2382 265.313 61.0394 276.138 61.4633 278.65" stroke="#E2E2E2" />
                  <rect x="57.216" y="278.522" width="1.66667" height="1.66667" rx="0.833333" transform="rotate(-9.57949 57.216 278.522)" fill="#A38D8D" />
                  <rect x="35.8515" y="282.127" width="5" height="1.66667" rx="0.833333" transform="rotate(-9.57949 35.8515 282.127)" fill="#A38D8D" />
                  <path d="M264.511 258.714L254.801 252.531C254.431 252.296 253.982 252.222 253.557 252.327L242.383 255.095C241.691 255.267 241.195 255.875 241.168 256.588L240.779 266.897C240.716 268.57 241.291 270.204 242.387 271.468L248.815 278.887C249.32 279.471 250.171 279.61 250.836 279.218L259.292 274.233C260.734 273.383 261.799 272.017 262.272 270.412L265.187 260.515C265.388 259.831 265.113 259.097 264.511 258.714Z" fill="#E2E2E2" fillOpacity="0.25" stroke="#E2E2E2" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M247.031 265.159L250.802 270.405C250.987 270.661 251.359 270.684 251.574 270.454L259.352 262.107" stroke="#E2E2E2" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M105.037 82.1156L147.805 66.2578C148.253 66.0915 148.747 66.0915 149.195 66.2578L191.963 82.1156C192.32 82.2478 192.32 82.7522 191.963 82.8844L149.195 98.7422C148.747 98.9085 148.253 98.9085 147.805 98.7422L105.037 82.8844C104.68 82.7522 104.68 82.2478 105.037 82.1156Z" stroke="#E2E2E2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M191 83V99" stroke="#E2E2E2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M121 91V111.714C121 111.714 123.5 120 148.5 120C173.5 120 176 111.714 176 111.714V91" stroke="#E2E2E2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="150" cy="237" r="1" fill="#E2E2E2" />
                  <path d="M154.5 237C154.5 239.701 153.952 242.121 153.088 243.847C152.21 245.604 151.089 246.5 150 246.5C148.911 246.5 147.79 245.604 146.912 243.847C146.048 242.121 145.5 239.701 145.5 237C145.5 234.299 146.048 231.879 146.912 230.153C147.79 228.396 148.911 227.5 150 227.5C151.089 227.5 152.21 228.396 153.088 230.153C153.952 231.879 154.5 234.299 154.5 237Z" stroke="#E2E2E2" />
                  <path d="M152.25 240.897C149.911 242.247 147.541 242.982 145.614 243.098C143.654 243.216 142.317 242.693 141.773 241.75C141.228 240.806 141.444 239.388 142.526 237.749C143.589 236.138 145.411 234.453 147.75 233.103C150.089 231.752 152.459 231.017 154.386 230.902C156.346 230.784 157.683 231.306 158.227 232.25C158.772 233.193 158.556 234.612 157.474 236.251C156.411 237.862 154.589 239.547 152.25 240.897Z" stroke="#E2E2E2" />
                  <path d="M152.25 233.103C149.911 231.753 147.541 231.017 145.614 230.902C143.654 230.784 142.317 231.307 141.773 232.25C141.228 233.193 141.444 234.612 142.526 236.251C143.589 237.862 145.411 239.547 147.75 240.897C150.089 242.247 152.459 242.983 154.386 243.098C156.346 243.216 157.683 242.693 158.227 241.75C158.772 240.807 158.556 239.388 157.474 237.749C156.411 236.138 154.589 234.453 152.25 233.103Z" stroke="#E2E2E2" />
                  <path d="M107.62 60H102.22V31.08H107.62V60ZM133.955 53.18C134.248 53.18 134.508 53.2933 134.735 53.52L136.855 55.82C135.682 57.2733 134.235 58.3867 132.515 59.16C130.808 59.9333 128.755 60.32 126.355 60.32C124.208 60.32 122.275 59.9533 120.555 59.22C118.848 58.4867 117.388 57.4667 116.175 56.16C114.962 54.8533 114.028 53.2933 113.375 51.48C112.735 49.6667 112.415 47.6867 112.415 45.54C112.415 43.3667 112.762 41.38 113.455 39.58C114.148 37.7667 115.122 36.2067 116.375 34.9C117.642 33.5933 119.148 32.58 120.895 31.86C122.642 31.1267 124.575 30.76 126.695 30.76C128.802 30.76 130.668 31.1067 132.295 31.8C133.935 32.4933 135.328 33.4 136.475 34.52L134.675 37.02C134.568 37.18 134.428 37.32 134.255 37.44C134.095 37.56 133.868 37.62 133.575 37.62C133.375 37.62 133.168 37.5667 132.955 37.46C132.742 37.34 132.508 37.2 132.255 37.04C132.002 36.8667 131.708 36.68 131.375 36.48C131.042 36.28 130.655 36.1 130.215 35.94C129.775 35.7667 129.262 35.6267 128.675 35.52C128.102 35.4 127.435 35.34 126.675 35.34C125.382 35.34 124.195 35.5733 123.115 36.04C122.048 36.4933 121.128 37.16 120.355 38.04C119.582 38.9067 118.982 39.9733 118.555 41.24C118.128 42.4933 117.915 43.9267 117.915 45.54C117.915 47.1667 118.142 48.6133 118.595 49.88C119.062 51.1467 119.688 52.2133 120.475 53.08C121.262 53.9467 122.188 54.6133 123.255 55.08C124.322 55.5333 125.468 55.76 126.695 55.76C127.428 55.76 128.088 55.72 128.675 55.64C129.275 55.56 129.822 55.4333 130.315 55.26C130.822 55.0867 131.295 54.8667 131.735 54.6C132.188 54.32 132.635 53.98 133.075 53.58C133.208 53.46 133.348 53.3667 133.495 53.3C133.642 53.22 133.795 53.18 133.955 53.18ZM151.36 55.8C152.36 55.8 153.2 55.68 153.88 55.44C154.56 55.2 155.1 54.88 155.5 54.48C155.914 54.08 156.207 53.6133 156.38 53.08C156.567 52.5467 156.66 51.98 156.66 51.38C156.66 50.7533 156.56 50.1933 156.36 49.7C156.16 49.1933 155.847 48.7667 155.42 48.42C154.994 48.06 154.44 47.7867 153.76 47.6C153.094 47.4133 152.287 47.32 151.34 47.32H145.92V55.8H151.36ZM145.92 35.24V43.6H150.2C152.04 43.6 153.427 43.2667 154.36 42.6C155.307 41.9333 155.78 40.8733 155.78 39.42C155.78 37.9133 155.354 36.84 154.5 36.2C153.647 35.56 152.314 35.24 150.5 35.24H145.92ZM150.5 31.08C152.394 31.08 154.014 31.26 155.36 31.62C156.707 31.98 157.807 32.4933 158.66 33.16C159.527 33.8267 160.16 34.6333 160.56 35.58C160.96 36.5267 161.16 37.5933 161.16 38.78C161.16 39.46 161.06 40.1133 160.86 40.74C160.66 41.3533 160.347 41.9333 159.92 42.48C159.507 43.0133 158.974 43.5 158.32 43.94C157.68 44.38 156.914 44.7533 156.02 45.06C159.994 45.9533 161.98 48.1 161.98 51.5C161.98 52.7267 161.747 53.86 161.28 54.9C160.814 55.94 160.134 56.84 159.24 57.6C158.347 58.3467 157.247 58.9333 155.94 59.36C154.634 59.7867 153.14 60 151.46 60H140.54V31.08H150.5ZM198.228 31.08V60H193.488V41.32C193.488 40.5733 193.528 39.7667 193.608 38.9L184.868 55.32C184.455 56.1067 183.822 56.5 182.968 56.5H182.208C181.355 56.5 180.722 56.1067 180.308 55.32L171.468 38.84C171.508 39.28 171.542 39.7133 171.568 40.14C171.595 40.5667 171.608 40.96 171.608 41.32V60H166.868V31.08H170.928C171.168 31.08 171.375 31.0867 171.548 31.1C171.722 31.1133 171.875 31.1467 172.008 31.2C172.155 31.2533 172.282 31.34 172.388 31.46C172.508 31.58 172.622 31.74 172.728 31.94L181.388 48C181.615 48.4267 181.822 48.8667 182.008 49.32C182.208 49.7733 182.402 50.24 182.588 50.72C182.775 50.2267 182.968 49.7533 183.168 49.3C183.368 48.8333 183.582 48.3867 183.808 47.96L192.348 31.94C192.455 31.74 192.568 31.58 192.688 31.46C192.808 31.34 192.935 31.2533 193.068 31.2C193.215 31.1467 193.375 31.1133 193.548 31.1C193.722 31.0867 193.928 31.08 194.168 31.08H198.228Z" fill="white" />
                </svg>

                <span className={styles.line}>ICBM</span>
              </p>
              <div className={styles.description}>
                <p className={styles.important}>저희는 이런 연구실을 만들고 싶어요.</p>
                <div className={styles.mention}>
                  <li>자신만의 프로젝트가 존재하는 연구실</li>
                  <li>서로가 서로를 도우며 성장하는 연구실</li>
                  <li>밝은 분위기 아래 연구하는 공간</li>
                </div>
                <p className={styles.important}>저희는 이런 연구원을 원해요.</p>
                <div className={styles.mention}>
                  <li className={styles.line}>열정적인 사람</li>
                  <li className={styles.line}>배우고자 하는 의지가 강한 사람</li>
                  <li className={styles.line}>완벽한 개발자로서 성장하고 싶은 사람</li>
                  <li>연구원들과 함께 성장을 원하는 사람</li>
                </div>
                <Link href={"https://open.kakao.com/me/Csetus"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={80} viewBox="0 0 208 191.94"><g><polygon className="cls-1" points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49" /><path className="cls-1" d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z" /></g></svg>
                  카카오톡 문의
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
      <Footer />
    </>
  )
}
