import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "rsuite";
import { Row, Col } from "rsuite";
import "../App.css";
import { SelectPicker } from "rsuite";
import { formdataAll } from "../constant";
import { DatePicker } from "rsuite";

const FormAll = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<formdataAll>();

  function onSubmit(data: formdataAll) {
    console.log("empcode is : ", data.empcode);
    console.log("firstname is : ", data.firstname);
    console.log("mobile no is : ", data.mobilenumber);
    console.log("date of birth : ", data.dob);
    console.log("date of joining is : ", data.doj);
    console.log("date of leaving is : ", data.dol);
    console.log("salary is : ", data.salary);
    console.log("gender is : ", data.gender);
    console.log("account number is : ", data.bno);
    console.log("ifsc code is : ", data.ifsc);
    console.log("bank is : ", data.bname);
    console.log("office city is : ", data.ocity);
    console.log("office state is : ", data.ostate);
    console.log("office address 1 is : ", data.oaddress1);
    console.log("office pincode is : ", data.pincode);
    console.log("employee status is : ", data.estatus);
    adddata(data);
  }

  const data1 = ["Male", "Female"].map((ele) => {
    return { label: ele, value: ele };
  });

  const data2 = ["Intern", "Full Time"].map((ele) => {
    return { label: ele, value: ele };
  });

  async function adddata(data: formdataAll) {
    try {
      const res = await fetch(
        "https://ins-f-backend.onrender.com/form/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            empcode: data.empcode,
            firstname: data.firstname,
            mobileno: data.mobilenumber,
            email: data.email,
            DOJ: data.doj,
            salary: data.salary,
            gender: data.gender,
            accno: data.bno,
            IFSCcode: data.ifsc,
            bankname: data.bname,
            officecity: data.ocity,
            officestate: data.ostate,
            officeaddress1: data.oaddress1,
            officepincode: data.pincode,
            employeestatus: data.estatus,
          }),
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function handleReset() {
    setValue("empcode", "");
    setValue("firstname", "");
    setValue("middlename", "");
    setValue("lastname", "");
    setValue("email", "");
    setValue("mobilenumber", "");
    setValue("fathername", "");
    setValue("designation", "");
    setValue("dcode", "");
    setValue("salary", "");
    setValue("dob", null);
    setValue("doj", null);
    setValue("dol", null);
    setValue("gender", "");
    setValue("bno", "");
    setValue("ifsc", "");
    setValue("bname", "");
    setValue("ocity", "");
    setValue("ostate", "");
    setValue("oaddress1", "");
    setValue("oaddress2", "");
    setValue("oaddress3", "");
    setValue("pincode", "");
    setValue("estatus", "");
  }

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <p className="formTypehead">Add Employee</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="show-grid">
          <Col xs={6}>
            <label className="formhead">
              Emp Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="empcode"
              defaultValue=""
              control={control}
              rules={{ required: "Empcode is required" }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter employee code"
                />
              )}
            />
            {errors.empcode && (
              <p className="errorIs">{errors.empcode.message}</p>
            )}
          </Col>

          <Col xs={6}>
            <label className="formhead">
              First Name <span className="requiredIs">*</span>
            </label>
            <Controller
              name="firstname"
              defaultValue=""
              control={control}
              rules={{
                required: "Firstname is required",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter first name"
                />
              )}
            />
            {errors.firstname && (
              <p className="errorIs">{errors.firstname.message}</p>
            )}
          </Col>

          <Col xs={6}>
            <label className="formhead">Middle Name</label>
            <Controller
              name="middlename"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter middle name"
                />
              )}
            />
          </Col>

          <Col xs={6}>
            <label className="formhead">Last Name</label>
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter last name"
                />
              )}
            />
          </Col>

          {/* 2 */}

          <Col xs={6} className="disIs">
            <label className="formhead">
              Email <span className="requiredIs">*</span>
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "required valid email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "required valid email",
                },
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter email"
                />
              )}
            />
            {errors.email && <p className="errorIs">{errors.email.message}</p>}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">father's Name</label>
            <Controller
              name="fathername"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter father name"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Mobile Number <span className="requiredIs">*</span>
            </label>
            <Controller
              name="mobilenumber"
              control={control}
              defaultValue=""
              rules={{
                required: "required valid mobile number",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "required valid mobile number",
                },
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  type="number"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter mobile number"
                />
              )}
            />
            {errors.mobilenumber && (
              <p className="errorIs">{errors.mobilenumber.message}</p>
            )}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Date of Birth <span className="requiredIs">*</span>
            </label>
            <Controller
              name="dob"
              control={control}
              defaultValue={null}
              rules={{ required: "Date of Birth is required" }}
              render={({ field }) => (
                <DatePicker
                  style={{ width: "100%" }}
                  id={field.name}
                  oneTap
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter date of birth"
                />
              )}
            />
            {errors.dob && <p className="errorIs">{errors.dob.message}</p>}
          </Col>

          {/* 3 */}
          <Col xs={6} className="disIs">
            <label className="formhead">Designation</label>
            <Controller
              name="designation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter designation"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">Designation Code</label>
            <Controller
              name="dcode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter designation code"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Date of joining <span className="requiredIs">*</span>
            </label>
            <Controller
              name="doj"
              control={control}
              defaultValue={null}
              rules={{ required: "required valid date of joining" }}
              render={({ field }) => (
                <DatePicker
                  style={{ width: "100%" }}
                  id={field.name}
                  oneTap
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter date of joining"
                />
              )}
            />
            {errors.doj && <p className="errorIs">{errors.doj.message}</p>}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Date of leaving <span className="requiredIs">*</span>
            </label>
            <Controller
              name="dol"
              control={control}
              defaultValue={null}
              rules={{
                required: "required valid date of leaving",
              }}
              render={({ field }) => (
                <DatePicker
                  style={{ width: "100%" }}
                  id={field.name}
                  oneTap
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter date of leaving"
                />
              )}
            />
            {errors.dol && <p className="errorIs">{errors.dol.message}</p>}
          </Col>

          {/* 4 */}
          <Col xs={6} className="disIs">
            <label className="formhead">
              Monthly Salary <span className="requiredIs">*</span>
            </label>
            <Controller
              name="salary"
              control={control}
              defaultValue=""
              rules={{
                required: "required monthly salary",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  type="number"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter monthly salary"
                />
              )}
            />
            {errors.salary && (
              <p className="errorIs">{errors.salary.message}</p>
            )}
          </Col>

          <Col xs={6} className="disIs2">
            <label className="formhead">
              Gender <span className="requiredIs">*</span>
            </label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "employee status required" }}
              render={({ field }) => (
                <SelectPicker
                  style={{ width: "100%" }}
                  data={data1}
                  searchable={false}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.gender?.message}</p>
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Bank account number <span className="requiredIs">*</span>
            </label>
            <Controller
              name="bno"
              control={control}
              defaultValue=""
              rules={{
                required: "required bank account number",
              }}
              render={({ field }) => (
                <Input
                  type="number"
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter bank account number"
                />
              )}
            />
            {errors.bno && <p className="errorIs">{errors.bno.message}</p>}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              IFSC Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="ifsc"
              control={control}
              defaultValue=""
              rules={{
                required: "required IFSC code",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter ifsc code"
                />
              )}
            />
            {errors.ifsc && <p className="errorIs">{errors.ifsc.message}</p>}
          </Col>

          {/* 5 */}
          <Col xs={6} className="disIs">
            <label className="formhead">
              Bank Name <span className="requiredIs">*</span>
            </label>
            <Controller
              name="bname"
              defaultValue=""
              control={control}
              rules={{
                required: "required bank name",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter bank name"
                />
              )}
            />
            {errors.bname && <p className="errorIs">{errors.bname.message}</p>}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office City <span className="requiredIs">*</span>
            </label>
            <Controller
              name="ocity"
              defaultValue=""
              control={control}
              rules={{
                required: "required office city",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter office city"
                />
              )}
            />
            {errors.ocity && <p className="errorIs">{errors.ocity.message}</p>}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office State <span className="requiredIs">*</span>
            </label>
            <Controller
              name="ostate"
              defaultValue=""
              control={control}
              rules={{
                required: "required office state",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter office state"
                />
              )}
            />
            {errors.ostate && (
              <p className="errorIs">{errors.ostate.message}</p>
            )}
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office address 1 <span className="requiredIs">*</span>
            </label>
            <Controller
              name="oaddress1"
              defaultValue=""
              control={control}
              rules={{
                required: "required office address1",
              }}
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter offfice address 1"
                />
              )}
            />
            {errors.oaddress1 && (
              <p className="errorIs">{errors.oaddress1.message}</p>
            )}
          </Col>

          {/* 6 */}

          <Col xs={6} className="disIs">
            <label className="formhead">Office address 2</label>
            <Controller
              name="oaddress2"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter office address 2"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">Office address 3</label>
            <Controller
              name="oaddress3"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter office address 3"
                />
              )}
            />
          </Col>

          <Col xs={6} className="disIs">
            <label className="formhead">
              Office Pin Code <span className="requiredIs">*</span>
            </label>
            <Controller
              name="pincode"
              control={control}
              defaultValue=""
              rules={{
                required: "required valid pincode",
              }}
              render={({ field }) => (
                <Input
                  type="number"
                  id={field.name}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter office pincode"
                />
              )}
            />
            {errors.pincode && (
              <p className="errorIs">{errors.pincode.message}</p>
            )}
          </Col>

          <Col xs={6} className="disIs2">
            <label className="formhead">
              Employee Status <span className="requiredIs">*</span>
            </label>
            <Controller
              name="estatus"
              control={control}
              rules={{ required: "employee status required" }}
              render={({ field }) => (
                <SelectPicker
                  style={{ width: "100%" }}
                  value={field.value}
                  data={data2}
                  searchable={false}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="errorIs">{errors.estatus?.message}</p>
          </Col>
        </Row>

        <div className="budiv">
          <Button
            className="busumit"
            style={{ display: "block", marginTop: "20px", padding: "8px 46px" }}
            appearance="primary"
            type="submit"
          >
            Submit
          </Button>

          <Button
            className="busumit"
            onClick={handleReset}
            style={{
              display: "block",
              marginTop: "20px",
              padding: "8px 46px",
              marginLeft: "16px",
            }}
            appearance="ghost"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormAll;
