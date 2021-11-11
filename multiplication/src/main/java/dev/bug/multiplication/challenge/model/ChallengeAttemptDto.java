package dev.bug.multiplication.challenge.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeAttemptDto {

    @Min(1)
    @Max(99)
    private int factorA;

    @Min(1)
    @Max(99)
    private int factorB;

    @NotBlank
    private String userAlias;

    @Positive(message = "How could you possibly get a negative result here? Try again.")
    private int guess;
}
