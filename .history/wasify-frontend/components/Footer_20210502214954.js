/** Site's Footer */

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 xl:pb-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 mb-12 lg:mb-16">
        <svg
          className="h-8"
          viewBox="0 0 184 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.6948 20.5326C60.6948 24.7079 58.591 26.7955 54.3834 26.7955C50.1759 26.7955 48.0721 24.7079 48.0721 20.5326V10.9527C48.0721 10.5971 48.2045 10.2878 48.4695 10.0249C48.7344 9.76202 49.0461 9.63057 49.4045 9.63057H50.059C50.4174 9.63057 50.7291 9.76202 50.994 10.0249C51.2589 10.2878 51.3914 10.5971 51.3914 10.9527V20.7182C51.3914 21.9244 51.6329 22.7981 52.116 23.3393C52.6147 23.8651 53.3861 24.128 54.4302 24.128C55.4743 24.128 56.2379 23.8651 56.721 23.3393C57.2196 22.7981 57.469 21.9244 57.469 20.7182V10.9527C57.469 10.5971 57.6014 10.2878 57.8664 10.0249C58.1313 9.76202 58.443 9.63057 58.8014 9.63057H59.3624C59.7208 9.63057 60.0325 9.76202 60.2974 10.0249C60.5623 10.2878 60.6948 10.5971 60.6948 10.9527V20.5326Z"
            fill="#374151"
          />
          <path
            d="M66.9999 18.9553V22.11C66.9999 22.7285 67.2648 23.2775 67.7947 23.7569C68.3401 24.2362 68.9712 24.4759 69.6881 24.4759C70.514 24.4759 71.1685 24.1435 71.6516 23.4785C72.1347 22.8136 72.3763 21.8316 72.3763 20.5326C72.3763 17.9038 71.4802 16.5893 69.6881 16.5893C68.9712 16.5893 68.3401 16.829 67.7947 17.3084C67.2648 17.7878 66.9999 18.3368 66.9999 18.9553ZM65.2468 31.6667C64.8884 31.6667 64.5767 31.5352 64.3118 31.2723C64.0468 31.0094 63.9144 30.7002 63.9144 30.3445V15.8239C63.9144 15.4682 64.0468 15.1589 64.3118 14.896C64.5767 14.6332 64.8884 14.5017 65.2468 14.5017H65.5273C65.9013 14.5017 66.2207 14.6332 66.4857 14.896C66.7506 15.1435 66.8908 15.4527 66.9064 15.8239V15.9862C66.9064 16.0017 66.9142 16.0094 66.9298 16.0094C66.9454 16.0094 66.961 16.0017 66.9766 15.9862C67.5376 15.3677 68.0986 14.927 68.6596 14.6641C69.2206 14.4012 69.8751 14.2697 70.6231 14.2697C72.088 14.2697 73.2567 14.8187 74.1294 15.9167C75.0021 16.9991 75.4384 18.5378 75.4384 20.5326C75.4384 22.4656 74.9787 23.9966 74.0593 25.1254C73.1554 26.2388 72.01 26.7955 70.6231 26.7955C69.2673 26.7955 68.0908 26.3084 67.0934 25.3342C67.0778 25.3187 67.0623 25.311 67.0467 25.311C67.0311 25.311 67.0233 25.3187 67.0233 25.3342V30.3445C67.0233 30.7002 66.8908 31.0094 66.6259 31.2723C66.3766 31.5352 66.0727 31.6667 65.7143 31.6667H65.2468Z"
            fill="#374151"
          />
          <path
            d="M78.2627 17.2156C77.951 17.2156 77.6861 17.1074 77.4679 16.8909C77.2497 16.6589 77.1406 16.3883 77.1406 16.079C77.1406 15.7697 77.2497 15.5069 77.4679 15.2904C77.6861 15.0739 77.951 14.9656 78.2627 14.9656H79.3847C79.5249 14.9656 79.5951 14.896 79.5951 14.7569V11.8806C79.5951 11.5249 79.7197 11.2156 79.9691 10.9527C80.234 10.6899 80.5457 10.5584 80.9041 10.5584H81.3716C81.73 10.5584 82.0417 10.6899 82.3066 10.9527C82.5715 11.2156 82.704 11.5249 82.704 11.8806V14.7569C82.704 14.896 82.7741 14.9656 82.9144 14.9656H85.5791C85.8908 14.9656 86.1557 15.0739 86.3739 15.2904C86.6077 15.5069 86.7245 15.7697 86.7245 16.079C86.7245 16.3883 86.6077 16.6589 86.3739 16.8909C86.1557 17.1074 85.8908 17.2156 85.5791 17.2156H82.9144C82.7741 17.2156 82.704 17.2775 82.704 17.4012V22.0868C82.704 23.0919 82.8131 23.7414 83.0312 24.0352C83.2494 24.329 83.7013 24.4759 84.387 24.4759C84.761 24.4759 85.0415 24.4605 85.2285 24.4295C85.5402 24.3986 85.8129 24.4682 86.0467 24.6383C86.2804 24.8084 86.3973 25.0404 86.3973 25.3342C86.3973 25.6744 86.2804 25.9837 86.0467 26.262C85.8285 26.5249 85.5558 26.6718 85.2285 26.7027C84.5428 26.7646 84.0286 26.7955 83.6857 26.7955C82.1741 26.7955 81.1144 26.4785 80.5067 25.8445C79.8989 25.195 79.5951 24.0429 79.5951 22.3883V17.4012C79.5951 17.2775 79.5249 17.2156 79.3847 17.2156H78.2627Z"
            fill="#374151"
          />
          <path
            d="M91.9942 26.5636C91.6358 26.5636 91.3241 26.4321 91.0592 26.1692C90.7943 25.9063 90.6618 25.5971 90.6618 25.2414V15.8239C90.6618 15.4682 90.7943 15.1589 91.0592 14.896C91.3241 14.6332 91.6358 14.5017 91.9942 14.5017H92.602C92.9604 14.5017 93.2721 14.6332 93.537 14.896C93.8019 15.1589 93.9344 15.4682 93.9344 15.8239V25.2414C93.9344 25.5971 93.8019 25.9063 93.537 26.1692C93.2721 26.4321 92.9604 26.5636 92.602 26.5636H91.9942ZM91.9942 11.9502C91.6358 11.9502 91.3241 11.8187 91.0592 11.5558C90.7943 11.2929 90.6618 10.9837 90.6618 10.628V10.4888C90.6618 10.1332 90.7943 9.82387 91.0592 9.56099C91.3241 9.2981 91.6358 9.16666 91.9942 9.16666H92.602C92.9604 9.16666 93.2721 9.2981 93.537 9.56099C93.8019 9.82387 93.9344 10.1332 93.9344 10.4888V10.628C93.9344 10.9837 93.8019 11.2929 93.537 11.5558C93.2721 11.8187 92.9604 11.9502 92.602 11.9502H91.9942Z"
            fill="#374151"
          />
          <path
            d="M99.1679 26.5636C98.8095 26.5636 98.4978 26.4321 98.2329 26.1692C97.9836 25.9063 97.8589 25.5971 97.8589 25.2414V15.8239C97.8589 15.4682 97.9836 15.1589 98.2329 14.896C98.4978 14.6332 98.8095 14.5017 99.1679 14.5017H99.4952C99.8536 14.5017 100.157 14.6254 100.407 14.8728C100.672 15.1203 100.812 15.4218 100.828 15.7775V15.9399C100.828 15.9553 100.835 15.963 100.851 15.963C100.882 15.963 100.898 15.9553 100.898 15.9399C101.817 14.8264 102.853 14.2697 104.007 14.2697C104.708 14.2697 105.269 14.4012 105.69 14.6641C106.126 14.927 106.508 15.3909 106.835 16.0558C106.835 16.0713 106.851 16.079 106.882 16.079C106.897 16.079 106.913 16.0713 106.929 16.0558C107.91 14.8651 109.017 14.2697 110.248 14.2697C111.541 14.2697 112.468 14.6177 113.03 15.3136C113.606 16.0094 113.894 17.2079 113.894 18.9089V25.2414C113.894 25.5971 113.762 25.9063 113.497 26.1692C113.248 26.4321 112.944 26.5636 112.585 26.5636H112.188C111.83 26.5636 111.518 26.4321 111.253 26.1692C110.988 25.9063 110.856 25.5971 110.856 25.2414V19.3728C110.856 18.244 110.747 17.5017 110.528 17.146C110.31 16.7904 109.889 16.6125 109.266 16.6125C108.861 16.6125 108.456 16.7981 108.051 17.1692C107.645 17.5404 107.443 17.9115 107.443 18.2826V25.2414C107.443 25.5971 107.31 25.9063 107.045 26.1692C106.78 26.4321 106.469 26.5636 106.11 26.5636H105.713C105.355 26.5636 105.043 26.4321 104.778 26.1692C104.529 25.9063 104.404 25.5971 104.404 25.2414V19.3728C104.404 18.2594 104.287 17.5249 104.053 17.1692C103.835 16.7981 103.414 16.6125 102.791 16.6125C102.386 16.6125 101.981 16.7981 101.576 17.1692C101.17 17.5404 100.968 17.9115 100.968 18.2826V25.2414C100.968 25.5971 100.835 25.9063 100.57 26.1692C100.306 26.4321 99.9938 26.5636 99.6354 26.5636H99.1679Z"
            fill="#374151"
          />
          <path
            d="M121.967 16.427C121.172 16.427 120.556 16.6512 120.12 17.0996C119.699 17.5326 119.434 18.2362 119.325 19.2105C119.325 19.3342 119.388 19.396 119.512 19.396H124.094C124.219 19.396 124.281 19.3342 124.281 19.2105C124.219 17.3548 123.447 16.427 121.967 16.427ZM122.551 26.7955C120.51 26.7955 118.936 26.2697 117.829 25.2182C116.738 24.1512 116.193 22.5893 116.193 20.5326C116.193 18.4914 116.684 16.9373 117.666 15.8703C118.647 14.8033 120.066 14.2697 121.92 14.2697C125.38 14.2697 127.156 16.2182 127.25 20.1151C127.265 20.4862 127.133 20.7955 126.852 21.0429C126.572 21.2904 126.244 21.4141 125.87 21.4141H119.489C119.349 21.4141 119.294 21.4837 119.325 21.6228C119.434 22.6589 119.777 23.4167 120.354 23.896C120.946 24.36 121.803 24.5919 122.925 24.5919C123.626 24.5919 124.406 24.4759 125.263 24.244C125.543 24.1667 125.8 24.213 126.034 24.3832C126.283 24.5533 126.408 24.7852 126.408 25.079C126.408 25.4347 126.299 25.7517 126.081 26.0301C125.878 26.2929 125.606 26.4553 125.263 26.5172C124.39 26.7027 123.486 26.7955 122.551 26.7955Z"
            fill="#374151"
          />
          <path
            d="M131.338 26.5636C130.979 26.5636 130.668 26.4321 130.403 26.1692C130.138 25.9063 130.006 25.5971 130.006 25.2414V10.9527C130.006 10.5971 130.138 10.2878 130.403 10.0249C130.668 9.76202 130.979 9.63057 131.338 9.63057H131.922C132.327 9.63057 132.701 9.73882 133.044 9.95532C133.387 10.1718 133.636 10.4579 133.792 10.8136L137.883 19.5816C137.883 19.5971 137.891 19.6048 137.906 19.6048C137.922 19.6048 137.93 19.5971 137.93 19.5816L142.02 10.8136C142.176 10.4579 142.426 10.1718 142.768 9.95532C143.111 9.73882 143.485 9.63057 143.89 9.63057H144.568C144.927 9.63057 145.238 9.76202 145.503 10.0249C145.768 10.2878 145.901 10.5971 145.901 10.9527V25.2414C145.901 25.5971 145.768 25.9063 145.503 26.1692C145.238 26.4321 144.927 26.5636 144.568 26.5636H144.054C143.696 26.5636 143.384 26.4321 143.119 26.1692C142.854 25.9063 142.722 25.5971 142.722 25.2414V15.1512C142.722 15.1357 142.714 15.128 142.698 15.128C142.683 15.128 142.675 15.1357 142.675 15.1512L139.87 21.1125C139.698 21.4682 139.434 21.762 139.075 21.994C138.732 22.2105 138.366 22.3187 137.977 22.3187H137.836C137.447 22.3187 137.073 22.2105 136.714 21.994C136.371 21.762 136.114 21.4682 135.943 21.1125L133.138 15.1512C133.138 15.1357 133.13 15.128 133.114 15.128C133.099 15.128 133.091 15.1357 133.091 15.1512V25.2414C133.091 25.5971 132.959 25.9063 132.694 26.1692C132.429 26.4321 132.117 26.5636 131.759 26.5636H131.338Z"
            fill="#374151"
          />
          <path
            d="M155.085 20.7646C152.856 20.7646 151.742 21.445 151.742 22.8058C151.742 23.3007 151.882 23.7027 152.163 24.012C152.459 24.3213 152.833 24.4759 153.285 24.4759C154.173 24.4759 154.89 24.2053 155.435 23.6641C155.981 23.1074 156.253 22.3496 156.253 21.3909V20.9734C156.253 20.8342 156.183 20.7646 156.043 20.7646H155.085ZM152.443 26.7955C151.384 26.7955 150.503 26.4553 149.802 25.7749C149.116 25.079 148.773 24.1821 148.773 23.0842C148.773 21.7388 149.288 20.695 150.316 19.9527C151.36 19.2105 152.95 18.8393 155.085 18.8393H156.043C156.183 18.8393 156.253 18.7697 156.253 18.6306V18.445C156.253 17.7337 156.082 17.2388 155.739 16.9605C155.396 16.6667 154.789 16.5197 153.916 16.5197C153.012 16.5197 151.906 16.6821 150.597 17.0069C150.316 17.0842 150.059 17.0378 149.825 16.8677C149.591 16.6821 149.475 16.4424 149.475 16.1486C149.475 15.7929 149.584 15.4759 149.802 15.1976C150.02 14.9038 150.301 14.7259 150.643 14.6641C151.828 14.4012 152.942 14.2697 153.986 14.2697C155.981 14.2697 157.376 14.6254 158.17 15.3368C158.965 16.0481 159.362 17.2929 159.362 19.0713V25.2414C159.362 25.5971 159.23 25.9063 158.965 26.1692C158.716 26.4321 158.412 26.5636 158.053 26.5636H157.796C157.422 26.5636 157.103 26.4399 156.838 26.1924C156.573 25.9295 156.433 25.6125 156.417 25.2414V24.9167C156.417 24.9012 156.409 24.8935 156.394 24.8935C156.363 24.8935 156.347 24.9012 156.347 24.9167C155.396 26.1692 154.095 26.7955 152.443 26.7955Z"
            fill="#374151"
          />
          <path
            d="M162.291 17.2156C161.979 17.2156 161.714 17.1074 161.496 16.8909C161.278 16.6589 161.169 16.3883 161.169 16.079C161.169 15.7697 161.278 15.5069 161.496 15.2904C161.714 15.0739 161.979 14.9656 162.291 14.9656H163.413C163.553 14.9656 163.623 14.896 163.623 14.7569V11.8806C163.623 11.5249 163.748 11.2156 163.997 10.9527C164.262 10.6899 164.574 10.5584 164.932 10.5584H165.4C165.758 10.5584 166.07 10.6899 166.335 10.9527C166.6 11.2156 166.732 11.5249 166.732 11.8806V14.7569C166.732 14.896 166.802 14.9656 166.942 14.9656H169.607C169.919 14.9656 170.184 15.0739 170.402 15.2904C170.636 15.5069 170.753 15.7697 170.753 16.079C170.753 16.3883 170.636 16.6589 170.402 16.8909C170.184 17.1074 169.919 17.2156 169.607 17.2156H166.942C166.802 17.2156 166.732 17.2775 166.732 17.4012V22.0868C166.732 23.0919 166.841 23.7414 167.059 24.0352C167.277 24.329 167.729 24.4759 168.415 24.4759C168.789 24.4759 169.07 24.4605 169.257 24.4295C169.568 24.3986 169.841 24.4682 170.075 24.6383C170.308 24.8084 170.425 25.0404 170.425 25.3342C170.425 25.6744 170.308 25.9837 170.075 26.262C169.857 26.5249 169.584 26.6718 169.257 26.7027C168.571 26.7646 168.057 26.7955 167.714 26.7955C166.202 26.7955 165.143 26.4785 164.535 25.8445C163.927 25.195 163.623 24.0429 163.623 22.3883V17.4012C163.623 17.2775 163.553 17.2156 163.413 17.2156H162.291Z"
            fill="#374151"
          />
          <path
            d="M178.716 16.427C177.921 16.427 177.306 16.6512 176.869 17.0996C176.449 17.5326 176.184 18.2362 176.075 19.2105C176.075 19.3342 176.137 19.396 176.262 19.396H180.843C180.968 19.396 181.03 19.3342 181.03 19.2105C180.968 17.3548 180.196 16.427 178.716 16.427ZM179.3 26.7955C177.259 26.7955 175.685 26.2697 174.578 25.2182C173.488 24.1512 172.942 22.5893 172.942 20.5326C172.942 18.4914 173.433 16.9373 174.415 15.8703C175.397 14.8033 176.815 14.2697 178.669 14.2697C182.129 14.2697 183.905 16.2182 183.999 20.1151C184.014 20.4862 183.882 20.7955 183.601 21.0429C183.321 21.2904 182.994 21.4141 182.62 21.4141H176.238C176.098 21.4141 176.043 21.4837 176.075 21.6228C176.184 22.6589 176.526 23.4167 177.103 23.896C177.695 24.36 178.552 24.5919 179.674 24.5919C180.376 24.5919 181.155 24.4759 182.012 24.244C182.292 24.1667 182.549 24.213 182.783 24.3832C183.033 24.5533 183.157 24.7852 183.157 25.079C183.157 25.4347 183.048 25.7517 182.83 26.0301C182.627 26.2929 182.355 26.4553 182.012 26.5172C181.139 26.7027 180.235 26.7955 179.3 26.7955Z"
            fill="#374151"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.3143 0C32.35 0 34.8108 2.47421 34.8108 5.52632V29.4737C34.8108 32.5258 32.35 35 29.3143 35H5.49642C2.46083 35 -2.28882e-05 32.5258 -2.28882e-05 29.4737V5.52632C-2.28882e-05 2.47421 2.46083 0 5.49642 0H29.3143ZM29.0261 23.741H28.2235C27.6313 23.741 27.1511 23.1893 27.1511 22.5088V12.6429C27.1511 11.8788 27.6904 11.259 28.3555 11.259H29.0261C29.6911 11.259 30.2304 11.8788 30.2304 12.6429V22.3572C30.2304 23.1213 29.6911 23.741 29.0261 23.741ZM11.3085 28.5526H12.111C12.776 28.5526 13.3153 27.9329 13.3153 27.1687V7.83123C13.3153 7.06707 12.776 6.44737 12.111 6.44737H11.4404C10.7753 6.44737 10.236 7.06707 10.236 7.83123V27.3204C10.236 28.0008 10.7162 28.5526 11.3085 28.5526ZM23.3877 28.5526H22.5851C21.9929 28.5526 21.5128 28.0008 21.5128 27.3204V7.83123C21.5128 7.06707 22.0521 6.44737 22.7171 6.44737H23.3877C24.0528 6.44737 24.5921 7.06707 24.5921 7.83123V27.1687C24.5921 27.9329 24.0528 28.5526 23.3877 28.5526ZM5.67002 23.741H6.47259C7.13766 23.741 7.67695 23.1213 7.67695 22.3572V12.6429C7.67695 11.8788 7.13766 11.259 6.47259 11.259H5.80193C5.13695 11.259 4.59766 11.8788 4.59766 12.6429V22.5088C4.59766 23.1893 5.07787 23.741 5.67002 23.741ZM17.7494 24.1324H16.9468C16.3546 24.1324 15.8744 23.5807 15.8744 22.9001V13.31C15.8744 12.5456 16.4136 11.9262 17.0787 11.9262H17.7494C18.4143 11.9262 18.9536 12.5456 18.9536 13.31V22.7485C18.9536 23.5127 18.4143 24.1324 17.7494 24.1324Z"
            fill="#4f46e5"
          />
        </svg>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8">
        <div>
          <h5 className="text-xl font-bold text-gray-700">Product</h5>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Landingpages
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Showcase
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className="text-xl font-bold text-gray-700">Industries</h5>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Employment
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Childcare
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Dealerships
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className="text-xl font-bold text-gray-700">About us</h5>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Download brochure
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className="text-xl font-bold text-gray-700">Legal</h5>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-500">
                  Privacy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20">
        <div className="text-sm space-y-4 md:space-y-1 text-center md:text-left">
          <p>©2020 Company. All rights reserved. | All rights reserved</p>
          <p>
            Wisdom is easily acquired when hiding under the bed with a saucepan
            on your head.
          </p>
        </div>
        <a
          href="#"
          className="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-4 px-5 lg:px-8 text-white md:transform md:-translate-y-2"
        >
          Start your free trial
        </a>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12">
        <nav className="flex flex-wrap justify-center space-x-6">
          <a href="#" className=" text-sm hover:text-gray-700 mb-2">
            Privacy
          </a>
          <a href="#" className=" text-sm hover:text-gray-700 mb-2">
            Content Terms Notice
          </a>
          <a href="#" className=" text-sm hover:text-gray-700 mb-2">
            Legal
          </a>
          <a href="#" className=" text-sm hover:text-gray-700 mb-2">
            Features
          </a>
          <a href="#" className=" text-sm hover:text-gray-700 mb-2">
            Landing Pages
          </a>
        </nav>
        <nav className="flex items-center space-x-2">
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <span className="sr-only">Instagram</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
