$header-height: 70px;

* {
  box-sizing: border-box;
}

body {
  header {
    background-color: #656565;
    color: #fff;

    .container {
      margin: 0 auto;
      width: 80%;
      height: $header-height;

      .header-left {
        display: inline-block;
        float: left;
        font-size: 30px;
        line-height: $header-height;
      }

      .header-right p,
      a {
        display: inline-block;
        float: right;
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        line-height: $header-height;

        a {
          padding: 0 20px;
          background-color: rgba(#fff,.3);

          &:hover {
            background-color: rgba(#fff,.5);
          }
        }
      }
    }
  }

  main {
    .rgb {
      .container {
        margin: 0 auto;
        width: 80%;

        .range-red {
          width: 50%;
        }

        .range-green {
          width: 50%;
        }

        .range-blue {
          width: 50%;
        }

        .slider {
          margin: 20px auto;
          width: 100%;
          height: 10px;
          outline: none;
          border-radius: 5px;
          background: #d3d3d3;
          opacity: 1;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;

          -webkit-appearance: none;
        }

        .range-container {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 200px;

          .range {
            width: 300px;
            background-color: #0ff;

            input {
              background-color: #00f;
            }

            span {
              background-color: #00f;
            }
          }
        }

        .slider::-webkit-slider-thumb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #4caf50;
          cursor: pointer;

          -webkit-appearance: none;
          appearance: none;
        }

        .slider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #4caf50;
          cursor: pointer;
        }

        .rgb-color-view {
          width: 300px;
          height: 100%;
          background-color: red;

          p {
            display: inline-block;
            text-align: center;
            line-height: 100px;
          }
        }
      }
    }
  }
}
