const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class JobApplication extends Model {}

JobApplication.init(
  {
    company: {
      type: DataTypes.STRING,
      allowNull: false, // Requires company to be present
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Requires title to be present
    },
    minSalary: DataTypes.INTEGER,
    maxSalary: {
      type: DataTypes.INTEGER,
      validate: {
        minSalaryLessThanMax(value) {
          if (this.minSalary && value && value < this.minSalary) {
            throw new Error(
              "Maximum salary cannot be less than minimum salary."
            );
          }
        },
      },
    },
    location: DataTypes.STRING,
    postDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true, // Ensures postDate is a valid date
        isPast(value) {
          if (value > new Date()) {
            throw new Error("Post date cannot be in the future.");
          }
        },
      },
    },
    jobPostUrl: DataTypes.STRING,
    applicationDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true, // Ensures applicationDate is a valid date
        isAfterPostDate(value) {
          if (this.postDate && value < this.postDate) {
            throw new Error("Application date cannot be before the post date.");
          }
        },
      },
    },
    lastContactDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true, // Ensures lastContactDate is a valid date
        isPast(value) {
          if (value > new Date()) {
            throw new Error("Last contact date cannot be in the future.");
          }
        },
      },
    },
    companyContact: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      allowNull: false, // Requires status to be present
      defaultValue: 1,
      validate: {
        isInt: true, // Ensures status is an integer
        min: 1, // Ensures status is at least 1
        max: 6, // Ensures status is not more than 6
      },
    },
  },
  {
    sequelize,
    modelName: "JobApplication",
    underscored: true,
    timestamps: false,
  }
);

module.exports = JobApplication;
