import { defaultDateOff, defaultDateIn } from '../dates.js';
import { baseURL } from "../API/index.js";
import { renderSearchResultsBlock } from "../search-results.js";
export const placeArray = [];
export function fetchPlaces(getdateIn, getdateOut, getmaxPrice) {
    const coordinates = `59.9386,30.3141`;
    const checkIn = new Date(getdateIn).getTime() || new Date(defaultDateIn).getTime();
    const checkOut = new Date(getdateOut).getTime() || new Date(defaultDateOff).getTime();
    fetch(baseURL + `/places?coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=${getmaxPrice}`)
        .then(response => response.json())
        .then((data) => {
        data.forEach((dataItem) => {
            placeArray.push(dataItem);
        });
        console.log(placeArray);
        renderSearchResultsBlock(placeArray);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hQbGFjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy9mZXRjaFBsYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFHL0QsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFZLEVBQUUsQ0FBQTtBQUVyQyxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVztJQUU1RCxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQTtJQUNyQyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsRixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUdyRixLQUFLLENBQUMsT0FBTyxHQUFHLHVCQUF1QixXQUFXLGdCQUFnQixPQUFPLGlCQUFpQixRQUFRLGFBQWEsV0FBVyxFQUFFLENBQUM7U0FDMUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZCLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZGVmYXVsdERhdGVPZmYsIGRlZmF1bHREYXRlSW4gfSBmcm9tICcuLi9kYXRlcy5qcydcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vQVBJL2luZGV4LmpzXCJcbmltcG9ydCB7IHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jayB9IGZyb20gXCIuLi9zZWFyY2gtcmVzdWx0cy5qc1wiXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy5qcydcblxuZXhwb3J0IGNvbnN0IHBsYWNlQXJyYXk6IFBsYWNlW10gPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQbGFjZXMoZ2V0ZGF0ZUluLCBnZXRkYXRlT3V0LCBnZXRtYXhQcmljZSkge1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gYDU5LjkzODYsMzAuMzE0MWBcbiAgY29uc3QgY2hlY2tJbiA9IG5ldyBEYXRlKGdldGRhdGVJbikuZ2V0VGltZSgpIHx8IG5ldyBEYXRlKGRlZmF1bHREYXRlSW4pLmdldFRpbWUoKVxuICBjb25zdCBjaGVja091dCA9IG5ldyBEYXRlKGdldGRhdGVPdXQpLmdldFRpbWUoKSB8fCBuZXcgRGF0ZShkZWZhdWx0RGF0ZU9mZikuZ2V0VGltZSgpXG5cblxuICBmZXRjaChiYXNlVVJMICsgYC9wbGFjZXM/Y29vcmRpbmF0ZXM9JHtjb29yZGluYXRlc30mY2hlY2tJbkRhdGU9JHtjaGVja0lufSZjaGVja091dERhdGU9JHtjaGVja091dH0mbWF4UHJpY2U9JHtnZXRtYXhQcmljZX1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICBwbGFjZUFycmF5LnB1c2goZGF0YUl0ZW0pXG4gICAgICB9KVxuXG4gICAgICBjb25zb2xlLmxvZyhwbGFjZUFycmF5KVxuICAgICAgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlQXJyYXkpXG4gICAgfSlcblxufVxuIl19