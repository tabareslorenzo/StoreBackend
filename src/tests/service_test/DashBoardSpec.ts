import DashboardQueries from '../../services/DashboardService'

const dashboard = new DashboardQueries();
describe("Order_Product Model", () => {
    it('should have an usersWithOrders method', () => {
        expect(dashboard.usersWithOrders).toBeDefined();
    });    
    
});