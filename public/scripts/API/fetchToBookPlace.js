import { baseURL } from "./index.js";
import { getSearchData } from "../helpers/getSearchData.js";
import { renderToast } from "../lib.js";
export function fetchToBookPlace(event) {
    const { getdateIn, getdateOut, } = getSearchData();
    const placeId = event.target.dataset.placeid;
    const placeName = event.target.dataset.name;
    const checkIn = new Date(getdateIn).getTime();
    const checkOut = new Date(getdateOut).getTime();
    // Получаем все даты между checkIn и checkOut в формате Unix
    function allDate(checkIn, checkOut) {
        let dateArr;
        for (let i = checkIn; i <= checkOut;) {
            dateArr.push(i);
            console.log(dateArr);
            i = i + 24 * 60 * 60 * 1000;
        }
        return dateArr;
    }
    const allBookedData = allDate(checkIn, checkOut);
    // Вопрос: Записывается в даты почему-то целая тонна чисел вместо передаваемого массива
    fetch(baseURL + `/places/${placeId}?checkInDate=${checkIn}&checkOutDate=${checkOut}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            bookedDates: allBookedData
        })
    })
        .then(response => response.json())
        .then(() => {
        renderToast({
            text: [`Вы успешно забронировали номер в отеле ${placeName} c ${getdateIn} по ${getdateOut}.`],
            type: 'success'
        }, {
            name: 'Отлично!',
            handler: () => {
                console.log(`Уведомление закрыто, ${placeName}`);
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hUb0Jvb2tQbGFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BUEkvZmV0Y2hUb0Jvb2tQbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBR3ZDLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFLO0lBRXBDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxHQUFHLEdBQUcsYUFBYSxFQUFFLENBQUE7SUFFbEQsTUFBTSxPQUFPLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO0lBQ3BELE1BQU0sU0FBUyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtJQUVuRCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUUvQyw0REFBNEQ7SUFDNUQsU0FBUyxPQUFPLENBQUMsT0FBZSxFQUFFLFFBQWdCO1FBQ2hELElBQUksT0FBaUIsQ0FBQTtRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLElBQUksUUFBUSxHQUFHO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO1NBQzVCO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUdELE1BQU0sYUFBYSxHQUFhLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFFMUQsdUZBQXVGO0lBRXZGLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxPQUFPLGdCQUFnQixPQUFPLGlCQUFpQixRQUFRLEVBQUUsRUFBRTtRQUNwRixNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO0tBQ0gsQ0FBQztTQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsV0FBVyxDQUNUO1lBQ0UsSUFBSSxFQUFFLENBQUMsMENBQTBDLFNBQVMsTUFBTSxTQUFTLE9BQU8sVUFBVSxHQUFHLENBQUM7WUFDOUYsSUFBSSxFQUFFLFNBQVM7U0FDaEIsRUFDRDtZQUNFLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsU0FBUyxFQUFFLENBQUMsQ0FBQTtZQUNsRCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gXCIuL2luZGV4LmpzXCJcbmltcG9ydCB7IGdldFNlYXJjaERhdGEgfSBmcm9tIFwiLi4vaGVscGVycy9nZXRTZWFyY2hEYXRhLmpzXCJcbmltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSBcIi4uL2xpYi5qc1wiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVG9Cb29rUGxhY2UoZXZlbnQpIHtcblxuICBjb25zdCB7IGdldGRhdGVJbiwgZ2V0ZGF0ZU91dCwgfSA9IGdldFNlYXJjaERhdGEoKVxuXG4gIGNvbnN0IHBsYWNlSWQ6IG51bWJlciA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnBsYWNlaWRcbiAgY29uc3QgcGxhY2VOYW1lOiBzdHJpbmcgPSBldmVudC50YXJnZXQuZGF0YXNldC5uYW1lXG5cbiAgY29uc3QgY2hlY2tJbiA9IG5ldyBEYXRlKGdldGRhdGVJbikuZ2V0VGltZSgpXG4gIGNvbnN0IGNoZWNrT3V0ID0gbmV3IERhdGUoZ2V0ZGF0ZU91dCkuZ2V0VGltZSgpXG5cbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQstGB0LUg0LTQsNGC0Ysg0LzQtdC20LTRgyBjaGVja0luINC4IGNoZWNrT3V0INCyINGE0L7RgNC80LDRgtC1IFVuaXhcbiAgZnVuY3Rpb24gYWxsRGF0ZShjaGVja0luOiBudW1iZXIsIGNoZWNrT3V0OiBudW1iZXIpIHtcbiAgICBsZXQgZGF0ZUFycjogbnVtYmVyW11cbiAgICBmb3IgKGxldCBpID0gY2hlY2tJbjsgaSA8PSBjaGVja091dDspIHtcbiAgICAgIGRhdGVBcnIucHVzaChpKVxuXG4gICAgICBjb25zb2xlLmxvZyhkYXRlQXJyKVxuICAgICAgaSA9IGkgKyAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfVxuICAgIHJldHVybiBkYXRlQXJyXG4gIH1cblxuXG4gIGNvbnN0IGFsbEJvb2tlZERhdGE6IG51bWJlcltdID0gYWxsRGF0ZShjaGVja0luLCBjaGVja091dClcblxuICAvLyDQktC+0L/RgNC+0YE6INCX0LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDQsiDQtNCw0YLRiyDQv9C+0YfQtdC80YMt0YLQviDRhtC10LvQsNGPINGC0L7QvdC90LAg0YfQuNGB0LXQuyDQstC80LXRgdGC0L4g0L/QtdGA0LXQtNCw0LLQsNC10LzQvtCz0L4g0LzQsNGB0YHQuNCy0LBcblxuICBmZXRjaChiYXNlVVJMICsgYC9wbGFjZXMvJHtwbGFjZUlkfT9jaGVja0luRGF0ZT0ke2NoZWNrSW59JmNoZWNrT3V0RGF0ZT0ke2NoZWNrT3V0fWAsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYm9va2VkRGF0ZXM6IGFsbEJvb2tlZERhdGFcbiAgICB9KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZW5kZXJUb2FzdChcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFtg0JLRiyDRg9GB0L/QtdGI0L3QviDQt9Cw0LHRgNC+0L3QuNGA0L7QstCw0LvQuCDQvdC+0LzQtdGAINCyINC+0YLQtdC70LUgJHtwbGFjZU5hbWV9IGMgJHtnZXRkYXRlSW59INC/0L4gJHtnZXRkYXRlT3V0fS5gXSxcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICfQntGC0LvQuNGH0L3QviEnLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+LCAke3BsYWNlTmFtZX1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG4iXX0=