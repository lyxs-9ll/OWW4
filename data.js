/**
 * 가상의 동네 카페 '달빛골목 카페 (Moonlight Alley Cafe)'
 * 30일간 5종 메뉴 판매량 및 매출 데이터
 * (외부 CSV 없이 직접 변수로 정의)
 */

const CAFE_INFO = {
    name: "달빛골목 카페",
    subtitle: "따뜻하고 아늑한 동네 카페",
    period: "2026.11.01 ~ 2026.11.30 (30일)",
    menus: [
        { id: "americano", name: "아메리카노", category: "Coffee", price: 4000 },
        { id: "latte", name: "카페라떼", category: "Coffee", price: 4800 },
        { id: "vanillaLatte", name: "바닐라빈 라떼", category: "Coffee", price: 5500 },
        { id: "matchaLatte", name: "제주 말차 라떼", category: "Non-Coffee", price: 5800 },
        { id: "croffle", name: "딸기 크로플", category: "Dessert", price: 6500 }
    ],
    overallStats: {
        totalRevenue: 23726500,
        totalQuantity: 4735,
        dailyAverageRevenue: 790883
    }
};

const DAILY_SALES_DATA = [
    {
        day: 1,
        date: "2026-11-01",
        dayOfWeek: "일요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 62, revenue: 248000 },
            latte: { name: "카페라떼", price: 4800, quantity: 39, revenue: 187200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 35, revenue: 192500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 24, revenue: 139200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 25, revenue: 162500 }
        },
        dayQuantity: 185,
        dayRevenue: 929400
    },
    {
        day: 2,
        date: "2026-11-02",
        dayOfWeek: "월요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 38, revenue: 152000 },
            latte: { name: "카페라떼", price: 4800, quantity: 28, revenue: 134400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 22, revenue: 121000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 15, revenue: 87000 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 16, revenue: 104000 }
        },
        dayQuantity: 119,
        dayRevenue: 598400
    },
    {
        day: 3,
        date: "2026-11-03",
        dayOfWeek: "화요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 44, revenue: 176000 },
            latte: { name: "카페라떼", price: 4800, quantity: 28, revenue: 134400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 21, revenue: 115500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 16, revenue: 92800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 18, revenue: 117000 }
        },
        dayQuantity: 127,
        dayRevenue: 635700
    },
    {
        day: 4,
        date: "2026-11-04",
        dayOfWeek: "수요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 51, revenue: 204000 },
            latte: { name: "카페라떼", price: 4800, quantity: 31, revenue: 148800 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 25, revenue: 137500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 16, revenue: 92800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 21, revenue: 136500 }
        },
        dayQuantity: 144,
        dayRevenue: 719600
    },
    {
        day: 5,
        date: "2026-11-05",
        dayOfWeek: "목요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 49, revenue: 196000 },
            latte: { name: "카페라떼", price: 4800, quantity: 32, revenue: 153600 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 26, revenue: 143000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 19, revenue: 110200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 22, revenue: 143000 }
        },
        dayQuantity: 148,
        dayRevenue: 745800
    },
    {
        day: 6,
        date: "2026-11-06",
        dayOfWeek: "금요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 66, revenue: 264000 },
            latte: { name: "카페라떼", price: 4800, quantity: 38, revenue: 182400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 26, revenue: 143000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 23, revenue: 133400 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 25, revenue: 162500 }
        },
        dayQuantity: 178,
        dayRevenue: 885300
    },
    {
        day: 7,
        date: "2026-11-07",
        dayOfWeek: "토요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 71, revenue: 284000 },
            latte: { name: "카페라떼", price: 4800, quantity: 41, revenue: 196800 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 33, revenue: 181500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 23, revenue: 133400 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 28, revenue: 182000 }
        },
        dayQuantity: 196,
        dayRevenue: 977700
    },
    {
        day: 8,
        date: "2026-11-08",
        dayOfWeek: "일요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 68, revenue: 272000 },
            latte: { name: "카페라떼", price: 4800, quantity: 47, revenue: 225600 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 29, revenue: 159500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 25, revenue: 145000 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 24, revenue: 156000 }
        },
        dayQuantity: 193,
        dayRevenue: 958100
    },
    {
        day: 9,
        date: "2026-11-09",
        dayOfWeek: "월요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 36, revenue: 144000 },
            latte: { name: "카페라떼", price: 4800, quantity: 25, revenue: 120000 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 22, revenue: 121000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 14, revenue: 81200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 19, revenue: 123500 }
        },
        dayQuantity: 116,
        dayRevenue: 589700
    },
    {
        day: 10,
        date: "2026-11-10",
        dayOfWeek: "화요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 44, revenue: 176000 },
            latte: { name: "카페라떼", price: 4800, quantity: 28, revenue: 134400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 20, revenue: 110000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 17, revenue: 98600 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 17, revenue: 110500 }
        },
        dayQuantity: 126,
        dayRevenue: 629500
    },
    {
        day: 11,
        date: "2026-11-11",
        dayOfWeek: "수요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 41, revenue: 164000 },
            latte: { name: "카페라떼", price: 4800, quantity: 34, revenue: 163200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 24, revenue: 132000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 19, revenue: 110200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 19, revenue: 123500 }
        },
        dayQuantity: 137,
        dayRevenue: 692900
    },
    {
        day: 12,
        date: "2026-11-12",
        dayOfWeek: "목요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 56, revenue: 224000 },
            latte: { name: "카페라떼", price: 4800, quantity: 33, revenue: 158400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 24, revenue: 132000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 20, revenue: 116000 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 20, revenue: 130000 }
        },
        dayQuantity: 153,
        dayRevenue: 760400
    },
    {
        day: 13,
        date: "2026-11-13",
        dayOfWeek: "금요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 66, revenue: 264000 },
            latte: { name: "카페라떼", price: 4800, quantity: 41, revenue: 196800 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 28, revenue: 154000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 20, revenue: 116000 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 27, revenue: 175500 }
        },
        dayQuantity: 182,
        dayRevenue: 906300
    },
    {
        day: 14,
        date: "2026-11-14",
        dayOfWeek: "토요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 71, revenue: 284000 },
            latte: { name: "카페라떼", price: 4800, quantity: 43, revenue: 206400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 34, revenue: 187000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 24, revenue: 139200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 30, revenue: 195000 }
        },
        dayQuantity: 202,
        dayRevenue: 1011600
    },
    {
        day: 15,
        date: "2026-11-15",
        dayOfWeek: "일요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 59, revenue: 236000 },
            latte: { name: "카페라떼", price: 4800, quantity: 42, revenue: 201600 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 30, revenue: 165000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 22, revenue: 127600 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 29, revenue: 188500 }
        },
        dayQuantity: 182,
        dayRevenue: 918700
    },
    {
        day: 16,
        date: "2026-11-16",
        dayOfWeek: "월요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 38, revenue: 152000 },
            latte: { name: "카페라떼", price: 4800, quantity: 27, revenue: 129600 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 20, revenue: 110000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 16, revenue: 92800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 15, revenue: 97500 }
        },
        dayQuantity: 116,
        dayRevenue: 581900
    },
    {
        day: 17,
        date: "2026-11-17",
        dayOfWeek: "화요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 44, revenue: 176000 },
            latte: { name: "카페라떼", price: 4800, quantity: 27, revenue: 129600 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 21, revenue: 115500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 15, revenue: 87000 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 17, revenue: 110500 }
        },
        dayQuantity: 124,
        dayRevenue: 618600
    },
    {
        day: 18,
        date: "2026-11-18",
        dayOfWeek: "수요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 47, revenue: 188000 },
            latte: { name: "카페라떼", price: 4800, quantity: 29, revenue: 139200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 22, revenue: 121000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 18, revenue: 104400 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 19, revenue: 123500 }
        },
        dayQuantity: 135,
        dayRevenue: 676100
    },
    {
        day: 19,
        date: "2026-11-19",
        dayOfWeek: "목요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 48, revenue: 192000 },
            latte: { name: "카페라떼", price: 4800, quantity: 35, revenue: 168000 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 24, revenue: 132000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 18, revenue: 104400 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 19, revenue: 123500 }
        },
        dayQuantity: 144,
        dayRevenue: 719900
    },
    {
        day: 20,
        date: "2026-11-20",
        dayOfWeek: "금요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 58, revenue: 232000 },
            latte: { name: "카페라떼", price: 4800, quantity: 44, revenue: 211200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 32, revenue: 176000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 22, revenue: 127600 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 24, revenue: 156000 }
        },
        dayQuantity: 180,
        dayRevenue: 902800
    },
    {
        day: 21,
        date: "2026-11-21",
        dayOfWeek: "토요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 69, revenue: 276000 },
            latte: { name: "카페라떼", price: 4800, quantity: 51, revenue: 244800 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 39, revenue: 214500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 29, revenue: 168200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 27, revenue: 175500 }
        },
        dayQuantity: 215,
        dayRevenue: 1079000
    },
    {
        day: 22,
        date: "2026-11-22",
        dayOfWeek: "일요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 67, revenue: 268000 },
            latte: { name: "카페라떼", price: 4800, quantity: 46, revenue: 220800 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 34, revenue: 187000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 22, revenue: 127600 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 25, revenue: 162500 }
        },
        dayQuantity: 194,
        dayRevenue: 965900
    },
    {
        day: 23,
        date: "2026-11-23",
        dayOfWeek: "월요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 41, revenue: 164000 },
            latte: { name: "카페라떼", price: 4800, quantity: 24, revenue: 115200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 21, revenue: 115500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 16, revenue: 92800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 18, revenue: 117000 }
        },
        dayQuantity: 120,
        dayRevenue: 604500
    },
    {
        day: 24,
        date: "2026-11-24",
        dayOfWeek: "화요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 45, revenue: 180000 },
            latte: { name: "카페라떼", price: 4800, quantity: 27, revenue: 129600 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 19, revenue: 104500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 17, revenue: 98600 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 17, revenue: 110500 }
        },
        dayQuantity: 125,
        dayRevenue: 623200
    },
    {
        day: 25,
        date: "2026-11-25",
        dayOfWeek: "수요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 44, revenue: 176000 },
            latte: { name: "카페라떼", price: 4800, quantity: 33, revenue: 158400 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 25, revenue: 137500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 18, revenue: 104400 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 19, revenue: 123500 }
        },
        dayQuantity: 139,
        dayRevenue: 699800
    },
    {
        day: 26,
        date: "2026-11-26",
        dayOfWeek: "목요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 50, revenue: 200000 },
            latte: { name: "카페라떼", price: 4800, quantity: 30, revenue: 144000 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 27, revenue: 148500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 21, revenue: 121800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 21, revenue: 136500 }
        },
        dayQuantity: 149,
        dayRevenue: 750800
    },
    {
        day: 27,
        date: "2026-11-27",
        dayOfWeek: "금요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 56, revenue: 224000 },
            latte: { name: "카페라떼", price: 4800, quantity: 41, revenue: 196800 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 33, revenue: 181500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 21, revenue: 121800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 26, revenue: 169000 }
        },
        dayQuantity: 177,
        dayRevenue: 893100
    },
    {
        day: 28,
        date: "2026-11-28",
        dayOfWeek: "토요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 73, revenue: 292000 },
            latte: { name: "카페라떼", price: 4800, quantity: 44, revenue: 211200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 35, revenue: 192500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 29, revenue: 168200 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 30, revenue: 195000 }
        },
        dayQuantity: 211,
        dayRevenue: 1058900
    },
    {
        day: 29,
        date: "2026-11-29",
        dayOfWeek: "일요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 70, revenue: 280000 },
            latte: { name: "카페라떼", price: 4800, quantity: 44, revenue: 211200 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 30, revenue: 165000 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 23, revenue: 133400 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 29, revenue: 188500 }
        },
        dayQuantity: 196,
        dayRevenue: 978100
    },
    {
        day: 30,
        date: "2026-11-30",
        dayOfWeek: "월요일",
        items: {
            americano: { name: "아메리카노", price: 4000, quantity: 38, revenue: 152000 },
            latte: { name: "카페라떼", price: 4800, quantity: 30, revenue: 144000 },
            vanillaLatte: { name: "바닐라빈 라떼", price: 5500, quantity: 21, revenue: 115500 },
            matchaLatte: { name: "제주 말차 라떼", price: 5800, quantity: 16, revenue: 92800 },
            croffle: { name: "딸기 크로플", price: 6500, quantity: 17, revenue: 110500 }
        },
        dayQuantity: 122,
        dayRevenue: 614800
    },
];

// 전역 객체로 내보내기 (브라우저 file:// 환경 호환)
window.CAFE_INFO = CAFE_INFO;
window.DAILY_SALES_DATA = DAILY_SALES_DATA;