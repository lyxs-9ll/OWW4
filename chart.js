/**
 * 달빛골목 카페 매출 대시보드 - Chart.js 렌더링 및 통계 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
    if (!window.DAILY_SALES_DATA || !window.CAFE_INFO) {
        console.error("데이터를 찾을 수 없습니다. data.js가 제대로 로드되었는지 확인하세요.");
        return;
    }

    const data = window.DAILY_SALES_DATA;
    const info = window.CAFE_INFO;

    // 1. 기본 통계 계산
    const stats = calculateStatistics(data, info);

    // 2. 상단 KPI 카드 렌더링
    renderKpiCards(stats);

    // 3. 차트 1: 일별 매출 꺾은선 차트
    renderDailyRevenueChart(data);

    // 4. 차트 2: 메뉴별 판매량 막대 차트
    renderMenuSalesChart(stats.menuTotals);

    // 5. 기능 3: 요일별 평균 매출 표 렌더링
    renderDowTable(stats.dowStats);
});

/**
 * 데이터 집계 및 통계 계산 함수
 */
function calculateStatistics(dailyData, cafeInfo) {
    let totalRevenue = 0;
    let totalQuantity = 0;

    // 메뉴별 집계 객체 초기화
    const menuTotals = {};
    cafeInfo.menus.forEach(m => {
        menuTotals[m.id] = {
            id: m.id,
            name: m.name,
            price: m.price,
            quantity: 0,
            revenue: 0
        };
    });

    // 요일별 집계 객체 초기화 (월~일 순서)
    const dowOrder = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    const dowStats = {};
    dowOrder.forEach(d => {
        dowStats[d] = {
            dayOfWeek: d,
            daysCount: 0,
            totalRevenue: 0,
            totalQuantity: 0,
            avgRevenue: 0,
            avgQuantity: 0
        };
    });

    // 일별 데이터 순회
    dailyData.forEach(dayRecord => {
        totalRevenue += dayRecord.dayRevenue;
        totalQuantity += dayRecord.dayQuantity;

        // 메뉴별 집계
        for (const [menuId, item] of Object.entries(dayRecord.items)) {
            if (menuTotals[menuId]) {
                menuTotals[menuId].quantity += item.quantity;
                menuTotals[menuId].revenue += item.revenue;
            }
        }

        // 요일별 집계
        const dow = dayRecord.dayOfWeek;
        if (dowStats[dow]) {
            dowStats[dow].daysCount += 1;
            dowStats[dow].totalRevenue += dayRecord.dayRevenue;
            dowStats[dow].totalQuantity += dayRecord.dayQuantity;
        }
    });

    // 요일별 평균 계산
    dowOrder.forEach(d => {
        const item = dowStats[d];
        if (item.daysCount > 0) {
            item.avgRevenue = Math.round(item.totalRevenue / item.daysCount);
            item.avgQuantity = Math.round((item.totalQuantity / item.daysCount) * 10) / 10;
        }
    });

    // 베스트 메뉴 선정
    const sortedMenus = Object.values(menuTotals).sort((a, b) => b.quantity - a.quantity);
    const topMenu = sortedMenus[0];

    // 최고 매출 요일 선정
    const sortedDows = Object.values(dowStats).sort((a, b) => b.avgRevenue - a.avgRevenue);
    const topDow = sortedDows[0];

    return {
        totalRevenue,
        totalQuantity,
        dailyAverageRevenue: Math.round(totalRevenue / dailyData.length),
        topMenu,
        topDow,
        menuTotals: Object.values(menuTotals),
        dowStats: dowOrder.map(d => dowStats[d])
    };
}

/**
 * 상단 KPI 요약 카드 렌더링
 */
function renderKpiCards(stats) {
    document.getElementById('kpi-total-revenue').textContent = `₩ ${stats.totalRevenue.toLocaleString()}`;
    document.getElementById('kpi-total-quantity').textContent = `${stats.totalQuantity.toLocaleString()} 잔/개`;
    document.getElementById('kpi-avg-revenue').textContent = `₩ ${stats.dailyAverageRevenue.toLocaleString()}`;
    document.getElementById('kpi-top-menu').textContent = `${stats.topMenu.name} (${stats.topMenu.quantity.toLocaleString()}개)`;
}

/**
 * ① 일별 매출 꺾은선 차트 (Line Chart)
 */
function renderDailyRevenueChart(dailyData) {
    const ctx = document.getElementById('dailyRevenueChart').getContext('2d');

    // 그라디언트 배경 생성
    const gradient = ctx.createLinearGradient(0, 0, 0, 380);
    gradient.addColorStop(0, 'rgba(199, 137, 84, 0.45)');
    gradient.addColorStop(1, 'rgba(199, 137, 84, 0.02)');

    const labels = dailyData.map(d => {
        const parts = d.date.split('-');
        const shortDow = d.dayOfWeek.replace('요일', '');
        return `${parts[1]}/${parts[2]} (${shortDow})`;
    });

    const revenues = dailyData.map(d => d.dayRevenue);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '일별 매출 (원)',
                data: revenues,
                borderColor: '#a35f29',
                backgroundColor: gradient,
                borderWidth: 2.5,
                fill: true,
                tension: 0.32,
                pointBackgroundColor: '#874617',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6.5,
                pointHoverBackgroundColor: '#6b330c',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#49372B',
                        font: { family: "'Pretendard', sans-serif", size: 13, weight: '600' }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(51, 33, 20, 0.92)',
                    titleColor: '#F5EBE1',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `매출액: ₩ ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#6f5e53',
                        maxRotation: 45,
                        minRotation: 45,
                        font: { size: 11 }
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: { color: 'rgba(199, 137, 84, 0.12)' },
                    ticks: {
                        color: '#6f5e53',
                        font: { size: 12 },
                        callback: function(value) {
                            return '₩ ' + (value / 10000).toLocaleString() + '만';
                        }
                    }
                }
            }
        }
    });
}

/**
 * ② 메뉴별 판매량 막대 차트 (Bar Chart)
 */
function renderMenuSalesChart(menuTotals) {
    const ctx = document.getElementById('menuSalesChart').getContext('2d');

    // 판매량 순으로 정렬
    const sorted = [...menuTotals].sort((a, b) => b.quantity - a.quantity);

    const labels = sorted.map(m => m.name);
    const quantities = sorted.map(m => m.quantity);
    const revenues = sorted.map(m => m.revenue);

    // 감성적인 카페 톤 색상 팔레트
    const backgroundColors = [
        '#8c552a', // 에스프레소 브라운 (아메리카노)
        '#b87948', // 라떼 카라멜 (카페라떼)
        '#d9a05b', // 바닐라 크림 (바닐라빈 라떼)
        '#5e7a4a', // 제주 말차 그린 (제주 말차 라떼)
        '#c45151'  // 딸기 코랄 레드 (딸기 크로플)
    ];

    const borderColors = [
        '#663914',
        '#8f5529',
        '#a87233',
        '#415930',
        '#9e3333'
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '총 판매량 (개)',
                data: quantities,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1.5,
                borderRadius: 8,
                hoverBackgroundColor: borderColors
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(51, 33, 20, 0.92)',
                    titleColor: '#F5EBE1',
                    bodyColor: '#FFFFFF',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const index = context.dataIndex;
                            const qty = quantities[index].toLocaleString();
                            const rev = revenues[index].toLocaleString();
                            return [
                                `총 판매량: ${qty} 개`,
                                `누적 매출: ₩ ${rev}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#49372B',
                        font: { size: 12, weight: '600' }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(199, 137, 84, 0.12)' },
                    ticks: {
                        color: '#6f5e53',
                        font: { size: 12 },
                        callback: function(value) {
                            return value.toLocaleString() + ' 개';
                        }
                    }
                }
            }
        }
    });
}

/**
 * ③ 요일별 평균 매출 표 (Table)
 */
function renderDowTable(dowStats) {
    const tbody = document.getElementById('dow-table-body');
    tbody.innerHTML = '';

    // 최고 평균 매출액 찾기 (하이라이트용)
    const maxAvgRev = Math.max(...dowStats.map(d => d.avgRevenue));

    let grandTotalRev = 0;
    let grandDaysCount = 0;
    let grandTotalQty = 0;

    dowStats.forEach(item => {
        grandTotalRev += item.totalRevenue;
        grandDaysCount += item.daysCount;
        grandTotalQty += item.totalQuantity;

        const isTop = item.avgRevenue === maxAvgRev;
        const tr = document.createElement('tr');
        if (isTop) {
            tr.className = 'top-day-row';
        }

        const isWeekend = item.dayOfWeek.startsWith('토') || item.dayOfWeek.startsWith('일');
        const badgeClass = isWeekend ? 'badge-weekend' : 'badge-weekday';

        tr.innerHTML = `
            <td>
                <span class="day-badge ${badgeClass}">${item.dayOfWeek}</span>
                ${isTop ? '<span class="best-tag">★ 최고 매출 요일</span>' : ''}
            </td>
            <td class="text-center">${item.daysCount} 일</td>
            <td class="text-right">${item.avgQuantity.toLocaleString()} 개</td>
            <td class="text-right text-bold">₩ ${item.avgRevenue.toLocaleString()}</td>
            <td class="text-right text-muted">₩ ${item.totalRevenue.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });

    // 총계/전체평균 행 렌더링
    const avgOverall = Math.round(grandTotalRev / grandDaysCount);
    const avgQtyOverall = Math.round((grandTotalQty / grandDaysCount) * 10) / 10;

    const tfoot = document.getElementById('dow-table-foot');
    if (tfoot) {
        tfoot.innerHTML = `
            <tr class="table-total-row">
                <td><strong>전체 합계 / 전체 평균</strong></td>
                <td class="text-center"><strong>${grandDaysCount} 일</strong></td>
                <td class="text-right"><strong>${avgQtyOverall.toLocaleString()} 개</strong></td>
                <td class="text-right text-accent"><strong>₩ ${avgOverall.toLocaleString()}</strong></td>
                <td class="text-right text-accent"><strong>₩ ${grandTotalRev.toLocaleString()}</strong></td>
            </tr>
        `;
    }
}

