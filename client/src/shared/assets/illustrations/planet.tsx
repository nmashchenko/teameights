import { FC, SVGProps } from 'react';
export const Planet: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg viewBox='0 0 270 220' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M210.475 130.837C209.009 136.309 207.001 141.492 204.52 146.338C197.381 160.312 186.344 171.519 173.164 178.948C166.8 182.54 159.928 185.252 152.757 186.959C145.452 188.706 137.838 189.417 130.119 188.974C124.847 188.668 119.528 187.824 114.23 186.404C112.958 186.064 111.703 185.694 110.465 185.296C96.3433 180.758 84.3287 172.538 75.2063 161.993C72.3505 158.701 69.7768 155.174 67.5134 151.469C65.0237 147.398 62.9087 143.103 61.192 138.638C55.464 123.734 54.207 106.949 58.6129 90.346C58.707 89.9946 58.8045 89.6488 58.8986 89.2974C58.9805 89.0094 59.0669 88.7227 59.1476 88.4392C59.22 88.1868 59.2924 87.9345 59.3693 87.6833C64.4791 70.8017 74.8237 56.8389 88.1256 47.106C90.6873 45.2322 93.3548 43.5154 96.1199 41.9678C108.309 35.1262 122.322 31.5102 136.77 31.9298C140.83 32.045 144.922 32.4836 149.017 33.2518C150.982 33.6211 152.946 34.0663 154.908 34.5919C168.013 38.1034 179.45 44.7246 188.638 53.4607C191.433 56.1072 194.018 58.9501 196.381 61.9625C198.67 64.8786 200.746 67.952 202.595 71.1557C203.5 72.7237 204.355 74.321 205.144 75.9485C208.944 83.6891 211.486 92.0654 212.571 100.757C213.796 110.544 213.185 120.726 210.475 130.837Z'
        fill='#F9911E'
      />
      <path
        d='M212.945 104.485C196.323 117.534 176.389 131.006 154.291 143.76C131.994 156.637 110.163 167.241 90.4077 175.135C90.2895 175.184 90.1681 175.228 90.05 175.277C85.3632 172.057 81.0843 168.364 77.2633 164.28C77.3743 164.257 77.482 164.229 77.5942 164.202L77.5986 164.203C77.6188 164.199 77.6458 164.187 77.666 164.183C96.7168 159.542 122.117 148.874 148.463 133.664C174.549 118.603 196.31 102.121 209.886 88.0372C211.129 92.1701 212.029 96.4257 212.571 100.757C212.725 101.995 212.851 103.235 212.945 104.485Z'
        fill='#F9A24B'
      />
      <path
        d='M185.125 64.1419C184.722 64.0338 184.343 63.8146 184.038 63.4863C181.854 61.1384 179.482 58.931 176.989 56.9258C175.999 56.1287 175.841 54.6791 176.638 53.6883C177.435 52.6979 178.884 52.5404 179.875 53.3376C182.54 55.481 185.075 57.8403 187.409 60.3495C188.276 61.2806 188.223 62.7377 187.292 63.6039C186.689 64.1647 185.866 64.3403 185.125 64.1419Z'
        fill='white'
      />
      <path
        d='M167.063 172.651C166.469 172.492 165.94 172.096 165.628 171.511C165.029 170.389 165.453 168.994 166.574 168.395C182.917 159.671 195.031 144.439 199.81 126.604C204.617 108.667 201.897 90.0438 192.153 74.1652C191.488 73.0812 191.827 71.6636 192.911 70.9982C193.994 70.333 195.413 70.6725 196.078 71.7561C206.49 88.7229 209.395 108.625 204.259 127.795C199.151 146.857 186.206 163.136 168.743 172.457C168.207 172.744 167.608 172.797 167.063 172.651Z'
        fill='white'
      />
      <path
        d='M155.746 177.467C155.017 177.272 154.4 176.724 154.149 175.953C153.757 174.744 154.419 173.445 155.628 173.052C156.958 172.621 158.294 172.14 159.598 171.624C160.782 171.156 162.119 171.736 162.586 172.919C163.054 174.101 162.475 175.439 161.292 175.907C159.898 176.458 158.472 176.971 157.051 177.432C156.612 177.575 156.16 177.578 155.746 177.467Z'
        fill='white'
      />
      <path
        opacity='0.25'
        d='M202.595 71.1558C200.745 67.9521 198.67 64.8787 196.381 61.9626C194.018 58.9503 191.433 56.1073 188.637 53.4608C188.713 53.7671 188.825 54.0594 188.985 54.3358C192.439 60.3055 187.015 70.6904 175.321 82.947C175.307 82.9625 175.283 82.9799 175.269 82.9953C175.136 83.1361 174.999 83.2756 174.86 83.4197C161.284 97.5035 139.523 113.985 113.437 129.046C108.855 131.692 104.302 134.198 99.8066 136.559C95.2551 138.95 89.6828 136.204 88.821 131.135C86.9848 120.332 87.389 108.971 90.4109 97.6931C95.8986 77.213 108.993 60.7975 125.836 50.6785C135.116 45.1027 145.534 41.4341 156.447 40.0481C160.997 39.4723 165.633 39.2972 170.308 39.5396C165.473 37.072 160.311 35.0667 154.856 33.6051C144.696 30.8828 134.473 30.2841 124.647 31.5274C113.734 32.9134 103.316 36.582 94.0365 42.1577C77.1936 52.2768 64.0988 68.6923 58.6112 89.1724C52.7244 111.142 56.7622 133.428 67.9682 151.287C67.8173 151.347 67.6636 151.41 67.5128 151.469C69.7763 155.174 72.35 158.701 75.2057 161.993C75.3981 161.905 75.5917 161.814 75.7842 161.726C79.9716 166.446 84.7435 170.688 90.0338 174.318C97.1977 179.237 105.309 183.04 114.179 185.417C119.63 186.878 125.102 187.724 130.522 188.006C127.493 186.46 124.592 184.733 121.834 182.839C113.795 177.324 106.944 170.401 101.541 162.522C101.25 162.098 100.964 161.671 100.681 161.241C97.5843 156.531 99.2805 150.181 104.246 147.512C109.217 144.841 114.229 142.05 119.266 139.142C141.363 126.388 161.297 112.916 177.919 99.8674C178.071 99.7459 178.227 99.6257 178.379 99.5042C188.675 91.3975 197.689 83.4525 205.144 75.9481C204.355 74.3211 203.5 72.7238 202.595 71.1558Z'
        fill='black'
      />
      <path
        d='M262.539 36.7086C255.254 24.0958 222.241 28.5137 179.595 45.5548L179.189 45.7892C183.854 48.9989 188.116 52.6866 191.92 56.7621L192.405 56.4821C208.868 52.4783 220.571 52.9824 224.011 58.953C227.465 64.9228 222.041 75.3077 210.347 87.5643C210.333 87.5797 210.309 87.5972 210.296 87.6126C210.163 87.7534 210.025 87.8929 209.886 88.0369C196.31 102.121 174.549 118.603 148.463 133.664C122.117 148.874 96.717 159.542 77.6662 164.182C77.6461 164.187 77.619 164.198 77.5989 164.203L77.5944 164.201C77.4823 164.228 77.3745 164.257 77.2636 164.28C73.2425 165.247 69.5074 165.949 66.1136 166.355C55.7605 167.61 48.5621 166.201 45.9875 161.735C42.5638 155.811 47.8797 145.545 59.39 133.406C57.7562 128.062 56.6821 122.516 56.2243 116.858C20.372 145.164 0.204889 171.408 7.4634 183.98C13.1023 193.754 34.1772 193.303 63.2147 184.683L63.2192 184.684C71.563 182.209 80.5651 179.057 90.0503 175.277C90.1684 175.227 90.2898 175.184 90.4079 175.134C110.164 167.24 131.995 156.637 154.292 143.76C176.389 131.005 196.323 117.534 212.945 104.485C213.097 104.364 213.253 104.243 213.405 104.122C249.487 75.7057 269.824 49.3258 262.539 36.7086Z'
        fill='#F7DB9C'
      />
      <path
        d='M114.032 188.592C105.034 186.181 96.6175 182.302 89.0173 177.064L91.6305 173.272C98.7978 178.211 106.736 181.869 115.225 184.143C155.918 195.047 197.895 170.811 208.799 130.118C211.073 121.632 211.874 112.93 211.18 104.254L211.148 103.858L211.251 103.474L213.482 104.069L215.77 103.886C216.506 113.088 215.658 122.315 213.247 131.31C201.686 174.456 157.178 200.153 114.032 188.592Z'
        fill='#333333'
      />
      <path
        d='M15.8968 192.312C10.952 190.987 7.46521 188.591 5.46785 185.131C1.39918 178.084 4.24123 167.888 13.9149 154.828C22.729 142.928 36.9948 129.073 55.1697 114.76L58.0192 118.378C40.1611 132.441 26.19 145.993 17.6159 157.569C9.37453 168.697 6.47646 177.667 9.45607 182.828C12.4361 187.989 21.6538 189.965 35.4108 188.391C49.7231 186.753 68.4447 181.43 89.5528 172.996C109.734 164.932 131.724 154.133 153.142 141.767C174.559 129.402 194.905 115.759 211.981 102.312C229.839 88.2492 243.81 74.6969 252.384 63.1208C260.626 51.9934 263.523 43.0228 260.544 37.862C257.565 32.7012 248.347 30.7248 234.589 32.2991C220.277 33.936 201.555 39.2597 180.447 47.6938L178.738 43.4174C200.221 34.8335 219.353 29.4071 234.066 27.724C250.213 25.877 260.464 28.5131 264.533 35.5596C268.601 42.6059 265.759 52.8015 256.085 65.8623C247.271 77.7627 233.005 91.6178 214.83 105.931C197.585 119.511 177.049 133.283 155.444 145.756C133.838 158.23 111.645 169.128 91.2622 177.273C69.7794 185.856 50.6471 191.283 35.934 192.966C27.7153 193.907 21.0227 193.685 15.8968 192.312ZM51.6993 168.193C48.0605 167.218 45.4698 165.448 43.9918 162.887C40.0682 156.091 44.9092 145.25 57.9908 131.537L61.3228 134.715C50.2919 146.279 45.3039 155.949 47.9797 160.584C50.6624 165.229 61.5282 165.744 77.0481 161.962L77.624 161.824C97.0703 157.006 122.43 146.036 147.312 131.671C172.379 117.198 194.712 100.577 208.594 86.0629L208.668 85.9854C219.711 74.4115 224.698 64.741 222.018 60.1042C219.339 55.4593 208.473 54.9444 192.95 58.7209L191.861 54.2459C210.274 49.7669 222.082 50.9961 226.006 57.8016C229.932 64.5945 225.101 75.4275 212.033 89.1292L211.961 89.2054C197.792 104.031 175.068 120.963 149.614 135.658C124.155 150.357 98.1303 161.57 78.212 166.421L78.1667 166.432C78.1244 166.442 78.0848 166.451 78.049 166.458L78.0389 166.46C66.6013 169.239 57.7189 169.805 51.6993 168.193Z'
        fill='#333333'
      />
      <path
        d='M18.6698 182.068C16.6097 181.516 15.1412 180.701 14.6403 179.834C14.5319 179.646 12.1023 175.071 22.4264 161.132C28.0274 153.57 36.0753 145.088 46.1144 136.128C36.8274 148.209 34.3673 158.19 38.807 165.88C40.3877 168.618 43.6414 172.248 50.1635 173.996C54.8952 175.264 60.9232 175.413 68.1643 174.447C45.941 181.767 28.0989 184.594 18.672 182.068C18.6706 182.068 18.6706 182.068 18.6698 182.068ZM223.896 84.5526C233.178 72.4753 235.634 62.4944 231.189 54.8039C229.613 52.0718 226.361 48.4398 219.837 46.6916C215.11 45.4252 209.087 45.2754 201.852 46.2371C224.069 38.9201 241.905 36.0958 251.331 38.6214C253.39 39.1731 254.858 39.9871 255.359 40.8545C255.468 41.0425 257.898 45.6174 247.574 59.5571C241.975 67.1165 233.929 75.5959 223.896 84.5526Z'
        fill='#DDBE7F'
      />
      <path
        d='M77.4154 165.627L75.7455 164.187C67.3381 155.199 61.0089 144.233 57.4406 132.475C55.7789 126.999 54.7059 121.329 54.2507 115.624C53.5166 106.502 54.3569 97.3505 56.749 88.4231C68.2138 45.6356 112.352 20.1526 155.139 31.6175C164.07 34.0105 172.418 37.8589 179.951 43.0565C184.651 46.2957 189.022 50.0591 192.943 54.2412C201.353 63.2218 207.684 74.19 211.252 85.9613L207.446 89.678L206.846 87.2973C203.48 76.1985 197.511 65.8569 189.582 57.3898C185.886 53.4479 181.766 49.901 177.336 46.8475C170.237 41.9497 162.368 38.3223 153.947 36.0658C113.612 25.258 72.0049 49.2803 61.1973 89.6151C58.9418 98.0326 58.1493 106.659 58.8408 115.256C59.2702 120.634 60.282 125.977 61.8476 131.138C65.1992 142.184 71.1355 152.488 79.0197 160.946L80.3992 162.119L77.4154 165.627Z'
        fill='#333333'
      />
    </svg>
  );
};
