const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "client/src/index.jsx"),

  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "main.js",
  },

  resolve: {
    //чтобы не указывать расширения файлов
    //при подключении через import, require
    extensions: [".jsx", ".js"],
  },

  optimization:{
    minimize: true,
    removeEmptyChunks: true,
    //разбить на основной (js, css...) и подключенные (jquery, bootstrap...)
    splitChunks:{
      chunks: "all",
    }
  },

  module: {
    rules: [
      //загрузчик для jsx (react)
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "mobx"], // используемые плагины
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ]
        },       
      },
      //обработка css и scss
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              webpackImporter: false,
            },
          },
        ],
      },

        //обработка статических файлов (шрифты, картинки,...)
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          loader: "file-loader",
          options:{
              name: "assets/images/[name].[ext]"
          }
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: "file-loader",
            options:{
                name: "assets/fonts/[name].[ext]"
            }
          },
    ],
  },

  plugins: [
    //очищает dist
    new CleanWebpackPlugin({
      //не удалять не обработанные файлы (index.html)
      cleanStaleWebpackAssets: false
    }),

    //копирует файлы
    new CopyWebpackPlugin([
      {
        from: "./client/src/assets",
        to: "assets",
        ignore: ["*.scss"],
      },
    ]),

    //извлекает css в style.min.css
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),

    //создает новый HTML (или на основе шаблона)
    //и подключит в него js и css
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './client/src/index.html',
    })
  ],
};
