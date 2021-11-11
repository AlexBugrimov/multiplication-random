package dev.bug.multiplication.challenge.model;

import lombok.Value;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Value(staticConstructor = "of")
public class ChallengeAttemptDto {

    @Min(1) @Max(99)
    int factorA;

    @Min(1) @Max(99)
    int factorB;

    @NotBlank
    String userAlias;

    @Positive(message = "How could you possibly get a negative result here? Try again.")
    int guess;
}
