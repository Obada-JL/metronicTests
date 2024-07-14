function Lists() {
  return (
    <div className="d-flex align-items-center mb-7">
      {/* begin::Symbol */}
      <div className="symbol symbol-50px me-5">
        <span className="symbol-label bg-light-success">
          {/* <KTIcon iconName="abstract-26" className="fs-2x text-success" /> */}
          <i class="ki ki-abstract-26 fs-2x text-success"></i>
        </span>
      </div>
      {/* end::Symbol */}
      {/* begin::Text */}
      <div className="d-flex flex-column">
        <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">
          Project Briefing
        </a>
        <span className="text-muted fw-semibold">Project Manager</span>
      </div>
      {/* end::Text */}
    </div>
  );
}
export default Lists;
