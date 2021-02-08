import React from 'react';
import { Page, Image, Text, Row, Code, Description, Divider, Spacer } from '@geist-ui/react';
import CustomHead from '../../../components/CustomHead';

const HW = () => {
  const pageDetails = {
    title: 'STAT-212 HW 1',
    description: '',
    icon: 'favicon.ico',
    url: 'tatiaris.com/hw/stat_212/1'
  };

  const a_hat = <>A&#770;</>;
  const beta_hat = <>&beta;&#770;</>;
  const der = <>&#8706;</>;
  const ddb = (
    <>
      <sup>{der}</sup>&frasl;
      <sub>
        {der}
        {beta_hat}
      </sub>
    </>
  );

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Text h2 style={{ margin: '0' }}>
        {pageDetails.title.toUpperCase()}
      </Text>
      <Divider />
      <Text h4>Name: Rishabh Tatia</Text>
      <Text h4>Email: tatiaris@tamu.edu</Text>
      <Text h4>Course: STAT-212-501</Text>
      <Divider />
      <Text h4>Problem 1</Text>
      <Text h5>Main.r</Text>
      <Code block>{`# loading the data
bacteria_data <- read.table("BacteriaDeath.txt", header = TRUE)

# adding the log_Y_t column
bacteria_data['log_Y_t'] = log(bacteria_data$Y_t)
bacteria_data['raw_prediction'] = 259.58 - 19.46*bacteria_data$t
bacteria_data['log_prediction'] = exp(5.9732 - 0.2184*bacteria_data$t)

# plotting the data
plot(x=bacteria_data$t, y=bacteria_data$Y_t)
plot(x=bacteria_data$t, y=bacteria_data$log_Y_t)
plot(x=bacteria_data$t, y=bacteria_data$log_prediction, main="predictive log equation")
plot(x=bacteria_data$t, y=bacteria_data$raw_prediction, main="predictive raw equation")

# creating a linear model for the best fitting data
linearMod_raw <- lm(Y_t ~ t, data=bacteria_data)
linearMod_log <- lm(log_Y_t ~ t, data=bacteria_data)
print(linearMod_raw)
print(linearMod_log)`}</Code>
      <Text h5>Output</Text>
      <Code block>{`Call:
lm(formula = Y_t ~ t, data = bacteria_data)

Coefficients:
(Intercept)            t  
     259.58       -19.46  


Call:
lm(formula = log_Y_t ~ t, data = bacteria_data)

Coefficients:
(Intercept)            t  
     5.9732      -0.2184`}</Code>
      <Row style={{ flexWrap: 'wrap' }}>
        <div>
          <Text style={{ textAlign: 'center' }}>Y_t vs t Plot</Text>
          <Image width="450" src="/img/hw/p5_plot_1.png" />
        </div>
        <div>
          <Text style={{ textAlign: 'center' }}>log(Y_t) vs t Plot w/ best fit line</Text>
          <Image width="450" src="/img/hw/p5_plot_2.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p5_plot_3.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p5_plot_4.png" />
        </div>
      </Row>
      <Text h5>Part A</Text>
      <Text>The (t, log(Y)) scatterplot suggests a linear relationship.</Text>
      <br />
      <Text h5>Part B</Text>
      <Text>Linear Regression Equations:</Text>
      <Text>Raw Y: 259.58 - 19.46t</Text>
      <Text>Log Y: 5.9732 - 0.2184t</Text>
      <Text>
        Final Predictive Equation: e<sup>5.9732 - 0.2184t</sup>
      </Text>
      <br />
      <Divider />
      <Text h4>Problem 2</Text>
      <Text h5>Main.r</Text>
      <Code block>{`# loading the data
wind_speed_data <- read.table("WindSpeed.txt", header = TRUE)
x = wind_speed_data$speed
y = wind_speed_data$output
x_inverse = 1/x
wind_speed_data['x_inverse'] = x_inverse

# # plotting the data
plot(x=x, y=y, main="Output vs Speed")
plot(x=x_inverse, y=y, main="1/Output vs Speed")

# creating a linear model for the best fitting data
linearMod_raw <- lm(y ~ x)
linearMod_inverse <- lm(y ~ x_inverse)
print(summary(linearMod_inverse))
print(summary(linearMod_inverse)$r.squared)

# predicting output through speed
wanted_x = 8
inversed_x = 1/wanted_x
estimated_prediction = 2.979 - 6.935*inversed_x
cat('Estimated prediction at wind speed of', wanted_x, ':', estimated_prediction, '\n\n')

# checking residuals for patterns
resid_values = linearMod_inverse$residuals
predicted = linearMod_inverse$fitted.values
plot(x, resid_values, xlab ="x", ylab ="residuals", main="Residual Plot")
plot(predicted, resid_values, xlab ="yhat", ylab ="residuals", main="Equal Variances Plot")
hist(resid_values)
plot(density(x))
qqnorm(resid_values)

# getting confidence data
print(confint(linearMod_inverse, level=0.98))
cat('\n')
print(confint(linearMod_inverse, level=0.90))

# Predicting Outputs through SLR
predict_95 = predict(linearMod_inverse, newdata=3.2, interval="prediction", level=0.90)
cat('\nOutput at X = 3.2 with 95% confidence = (', 2.901903 - 7.288348/3.2, ',', 3.055817 - 6.580747/3.2, ')\n')
cat('\nOutput at X = 3.2 with 95% confidence = (', 2.901903 - 7.288348/9.05, ',', 3.055817 - 6.580747/9.05, ')\n')`}</Code>
      <Text h5>Output</Text>
      <Code block>{`Call:
lm(formula = y ~ x_inverse)

Residuals:
     Min       1Q   Median       3Q      Max 
-0.20547 -0.04940  0.01100  0.08352  0.12204 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)   2.9789     0.0449   66.34   <2e-16 ***
x_inverse    -6.9345     0.2064  -33.59   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.09417 on 23 degrees of freedom
Multiple R-squared:   0.98, Adjusted R-squared:  0.9792 
F-statistic:  1128 on 1 and 23 DF,  p-value: < 2.2e-16

[1] 0.9800249
Estimated prediction at wind speed of 8 : 2.112125 

                  1 %      99 %
(Intercept)  2.866610  3.091110
x_inverse   -7.450604 -6.418491

                  5 %      95 %
(Intercept)  2.901903  3.055817
x_inverse   -7.288348 -6.580747

Output at X = 3.2 with 95% confidence = ( 0.6242943 , 0.9993336 )

Output at X = 3.2 with 95% confidence = ( 2.096561 , 2.328663 )`}</Code>
      <Row style={{ flexWrap: 'wrap' }}>
        <div>
          <Image width="450" src="/img/hw/p6_plot_1.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p6_plot_2.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p6_plot_3.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p6_plot_4.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p6_plot_5.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p6_plot_6.png" />
        </div>
        <div>
          <Image width="450" src="/img/hw/p6_plot_7.png" />
        </div>
      </Row>
      <Text h5>Part A</Text>
      <Text>
        The <b>(1/x, y) scatterplot</b> suggests a linear relationship.
      </Text>
      <br />
      <Text h5>Part B</Text>
      <Text>
        The Estimated Regression Line Equation: <b>2.9789 - 6.9345x</b>
      </Text>
      <br />
      <Text h5>Part C</Text>
      <Text>
        Adjusted Equation: <b>2.9789 - 6.9345/x</b>
      </Text>
      <Text>
        Estimated Output at Wind Speed = 8: <b>2.112125</b>
      </Text>
      <br />
      <Text h5>Part A (Extra)</Text>
      <Text>Refer to Part B</Text>
      <br />
      <Text h5>Part B (Extra)</Text>
      <Text>The Residual Plot does not show any signs of an obvious pattern, suggesting that the regression curve is a straight line</Text>
      <Text>There is no obvious pattern in the Equal Variance Plot, hence checking the equal variances assumption.</Text>
      <Text>The histogram, kernel density estimate, and normal Q-Q plot of the residuals display a bell curve distribution of the residuals, hence checking the normality assumption</Text>
      <br />
      <Text h5>Part C (Extra)</Text>
      <Text>
        Coefficient of determination (R^2): <b>0.9800249</b>
      </Text>
      <Text>
        This means that about <b>98% of the total variation in the Output</b> is the explained by the linear relationship between Wind speed and output.
      </Text>
      <br />
      <Text h5>Part D (Extra)</Text>
      <Text>
        99% confidence interval (CI) for the slope: <b>(-7.450604, -6.418491)</b>
      </Text>
      <br />
      <Text h5>Part E (Extra)</Text>
      <Text>
        95% CI for average output at wind speed = 3.2: <b>(0.6242943, 0.9993336)</b>
      </Text>
      <br />
      <Text h5>Part F (Extra)</Text>
      <Text>
        95% CI for average output at wind speed = 9.05: <b>(2.096561, 2.328663)</b>
      </Text>
      <Divider />
      <Spacer y={24} />
      <Text h4>Problem 3</Text>
      <Row style={{ flexWrap: 'wrap' }}>
        <div>
          <Image width="450" height="500" src="/img/hw/p7_img_1.jpg" />
        </div>
        <div>
          <Image width="450" height="500" src="/img/hw/p7_img_2.jpg" />
        </div>
      </Row>
      <Divider y={8}>End of Assignment</Divider>
    </Page>
  );
};

export default HW;
