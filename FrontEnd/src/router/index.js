import Vue from "vue";
import VueRouter from "vue-router";
import SigninView from "@/views/SigninView.vue";
import HomeView from "@/views/HomeView.vue";
import HouseView from "@/views/HouseView.vue";
import AdminView from "@/views/AdminView.vue";
import SellView from "@/views/SellView.vue";
import HelpdeskView from "@/views/HelpdeskView.vue";
import MypageView from "@/views/MypageView.vue";
import SignupView from "@/views/SignupView.vue";
import RecommendView from "@/views/RecommendView.vue";
import NoticeBoard from "@/components/NoticeBoard.vue";
import QnaBoard from "@/components/QnaBoard.vue";
import QnaDetail from "@/components/Board/Qna/Qna/QnaDetail.vue";
import QnaRegist from "@/components/Board/Qna/Qna/QnaRegist.vue";
import SellRegist from "@/components/Sell/SellRegist.vue";
import SellList from "@/components/Sell/SellList.vue";
import SellItemDetail from "@/components/Sell/SellItemDetail.vue";
import InterestView from "@/views/InterestView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/house",
    name: "house",
    component: HouseView,
  },
  {
    path: "/sell",
    name: "sell",
    component: SellView,
    redirect: "/sell/list",
    children: [
      {
        path: "list",
        name: "sellList",
        component: SellList,
      },
      {
        path: "detail",
        name: "sellDeatil",
        component: SellItemDetail,
      },
      {
        path: "sellregist",
        name: "sellregist",
        component: SellRegist,
      },
    ],
  },

  {
    path: "/recommend",
    name: "recommend",
    component: RecommendView,
  },
  {
    path: "/interest",
    name: "interest",
    component: InterestView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MypageView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/helpdesk",
    name: "helpdesk",
    component: HelpdeskView,
    redirect: "/helpdesk/qna/",
    children: [
      {
        path: "notice",
        name: "notice",
        component: NoticeBoard,
      },
      {
        path: "qna",
        name: "qna",
        component: QnaBoard,
        children: [{ path: "article/:no", name: "qnaDetail" }],
      },
      {
        path: "qnadetail",
        component: QnaDetail,
        name: "QnaDetail",
      },
      {
        path: "qnaregist",
        component: QnaRegist,
        name: "QnaRegist",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;
