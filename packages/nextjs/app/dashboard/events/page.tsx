import DashboardLayout from "~~/components/DashboardLayout";

const Events = () => {
  return (
    <DashboardLayout>
      <div>Events screen</div>
    </DashboardLayout>
  );
};

Events.getLayout = (page: any) => {
  page;
};

export default Events;
